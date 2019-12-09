import { Map as OLMap } from "ol"
import Bar from "ol-ext/control/Bar"
import Button from "ol-ext/control/Button"
import View from "ol/View"
import LayerPopup from "ol-ext/control/LayerPopup"
import { Attribution, Zoom, OverviewMap } from "ol/control"
import FullScreen from "ol/control/FullScreen"
import { shiftKeyOnly } from "ol/events/condition"
import VectorTileLayer from "ol/layer/VectorTile"
import VectorTileSource from "ol/source/VectorTile"
import GeoJSON from "ol/format/GeoJSON"
import polygonStyle from "../styles/polygon"
import Feature from "ol/Feature"
import { fromCircle } from "ol/geom/Polygon"
import { Draw, Modify } from "ol/interaction"
import { Fill, Icon, Stroke, Style, Text } from "ol/style"
import stylefunction from "ol-mapbox-style/stylefunction"
import VectorLayer from "ol/layer/Vector"
import { fromLonLat } from "ol/proj"
import VectorSource from "ol/source/Vector"
import { MapInterface } from "../types/customInterfaces"
import { Job, GeocodingResponseObject } from "../types/customTypes"
import ClusterLayer from "./clusterLayer"
import { log } from "./logger"
import { countryLayer } from "./countryLayer"
import BaseLayer from "ol/layer/Base"
import Geometry from "ol/geom/Geometry"
import store from "../redux/store"
import { setAllJobs, setShownJobs } from "../redux/jobs/actions"
import Sample from "./sample"
import { filterJobs } from "./jobFilter"
import { MVT } from "ol/format"
import { apply as applyMapboxStyle, applyStyle } from "ol-mapbox-style"
import Charon from "./charon"

import { string } from "prop-types"

export default class Map implements MapInterface {
  public jobs: Job[]
  private mapID: string
  public olmap: OLMap
  private clusterLayer: ClusterLayer
  private zIndices: Record<string, number>

  /**
   *Creates an instance of Map.
   * @param [mapID="map"]
   * @memberof Map
   */
  public constructor(mapID: string) {
    log.debug("Initializing map", { mapID })
    this.mapID = mapID
    this.zIndices = {
      tiles: 0,
      countries: 10,
      circleSelect: 10,
      jobs: 1000,
    }

    this.jobs = []
    this.olmap = this.buildMap()
    this.loadJobs()
    this.addControls()
    this.addCircleSelect()
    this.addCountryLayer()
    this.buildClusterLayer()
  }

  loadJobs(): void {
    new Sample().jobs(200).then((jobs: Job[]) => {
      store.dispatch(setAllJobs(jobs))
    })
  }

  addVectorLayer(name: string, layer: VectorLayer, map = this.olmap): VectorLayer {
    layer.set("name", name)
    map.addLayer(layer)
    return layer
  }

  addCountryLayer(): void {
    countryLayer(this)
  }

  public countryLayerFromGeometry(geometry: Record<string, any>[]): VectorLayer {
    const layerName = "countries"
    const [layer, wasCreated] = this.getOrCreateLayer(layerName, {
      style: polygonStyle({ isSelected: false }),
    })
    if (!wasCreated) {
      layer.getSource().clear()
    }
    const source = new VectorSource()
    const features = geometry.map(g => {
      return new Feature({
        geometry: g,
      })
    })
    source.addFeatures(features)
    layer.setSource(source)
    if (wasCreated) {
      this.addVectorLayer(layerName, layer)
    }
    layer.setZIndex(this.zIndices.countries)
    return layer
  }

  public featureLayerFromGeoJson(geojson: GeocodingResponseObject): VectorLayer {
    const layerName = "featureLayer"
    const [layer, wasCreated] = this.getOrCreateLayer(layerName, {
      style: new Style({
        fill: new Fill({
          color: "rgba(1,1,1,1)",
        }),
      }),
    })
    if (!wasCreated) {
      layer.getSource().clear()
    }
    const source = new VectorSource()
    const features = new GeoJSON({
      featureProjection: "EPSG:3857",
    }).readFeatures(geojson.features[0])
    source.addFeatures(features)
    layer.setSource(source)
    if (wasCreated) {
      this.addVectorLayer(layerName, layer)
    }
    return layer
  }

  /**
   * Adds map controls
   * Should be called in the constructor
   *
   * @returns
   * @memberof Map
   */
  private addControls(): any {
    const mainbar = new Bar()
    mainbar.setPosition("left-top")

    this.olmap.addControl(new FullScreen())
    this.olmap.addControl(mainbar)
    mainbar.addControl(this.circleSelectRemoveButton())
    return mainbar
  }

  private circleSelectRemoveButton(): void {
    return new Button({
      html: "R",
      className: "",
      title: "Remove Circle Selection",
      handleClick: () => {
        this.clearSource(this.getDrawLayer())
      },
    })
  }

  /**
   * @description Removes an entire layer from the map.
   * @param {string} name
   * @memberof Map
   */
  private removeLayersByNames(names: string[]): void {
    const layers = this.getLayersByNames(names)
    log.info("layers", layers)
    layers.forEach((layer: BaseLayer) => {
      log.info("Deleting layer", layer)
      this.olmap.removeLayer(layer)
    })
  }

  /**
   * Moves the map to the specified coordinates and sets the zoomlevel.
   *
   * @param {*} center
   * @param {*} [zoom=-1]
   * @memberof Map
   */
  private zoomTo(center: number[], zoom = 16): void {
    log.debug("Zooming", { center, zoom })
    this.olmap.getView().animate({
      center: center,
      zoom: zoom,
    })
  }

  /**
   * Adds the ability to draw a circle on the map and crop its content.
   *
   * @memberof Map
   */
  private addCircleSelect(): void {
    const drawLayer = this.getDrawLayer({ clear: true })
    this.olmap.addLayer(drawLayer)
    const modify = new Modify({
      source: drawLayer.getSource(),
    })
    this.olmap.addInteraction(modify)

    const draw = new Draw({
      source: drawLayer.getSource(),
      // @ts-ignore
      type: "Circle",
      wrapX: true,
      condition: shiftKeyOnly,
      // Sets the style during first transformation
      style: polygonStyle(),
    })
    this.handleCircleSelectEvents(draw, modify)
    this.olmap.addInteraction(draw)
  }

  private handleCircleSelectEvents(draw: Draw, modify: Modify): void {
    const getCircle = (): Geometry | undefined => {
      const source = this.getDrawLayer().getSource()
      if (source.getFeatures().length === 1) {
        return source.getFeatures()[0].get("geometry")
      }

      return undefined
    }

    const onEnd = (): void => {
      const circle = getCircle()
      if (circle) {
        const filteredJobs = filterJobs(store.getState().jobs.allJobs, {
          countries: store.getState().countries.selectedCountries,
          circle: circle,
        })
        store.dispatch(setShownJobs(filteredJobs))
      }
    }

    draw.on("drawend", () => {
      this.clearSource(this.getDrawLayer())
      onEnd()
    })

    modify.on("modifyend", () => {
      onEnd()
    })
  }

  private getDrawLayer({ clear = false }: { clear?: boolean } = {}): VectorLayer {
    let [layer, wasCreated] = this.getOrCreateLayer("drawLayer", {
      source: new VectorSource(),
      // Sets the style after transformation
      style: polygonStyle(),
    })
    layer = layer as VectorLayer
    if (!wasCreated && clear) {
      this.clearSource(layer)
    }
    layer.setZIndex(this.zIndices.circleSelect)
    return layer
  }

  private clearSource(layer: VectorLayer): VectorLayer {
    if (typeof layer.getSource === "function") {
      layer.getSource().clear()
    }
    return layer
  }

  /**
   * Calculate the radius of a given circle
   *
   * @param {*} circle
   * @returns
   * @memberof Map
   */
  private getRadius(circle: Feature): number {
    return circle.get("values_").geometry.getRadius()
  }

  /**
   * Convert a circle to its polygon representation.
   *
   * @param  circleFeature
   * @returns
   * @memberof Map
   */
  private makeFeatureFromCircle(circleFeature: Feature): Feature {
    return new Feature({
      geometry: fromCircle(circleFeature.get("geometry")),
      //  TODO the following style seems to have no effect
      style: new Style({
        fill: new Fill({
          color: "rgba(0,0,0,0)",
        }),
        stroke: new Stroke({
          color: "rgba(0,0,0,0)",
          width: 0,
        }),
      }),
    })
  }

  /**
   * Search through the map's layers and return the searched one by name.
   *
   * @param {*} name
   * @returns
   * @memberof Map
   */
  private getLayersByNames(names: string[]): BaseLayer[] {
    const allLayers = this.olmap.getLayers()
    const filteredLayers: BaseLayer[] = []
    allLayers.forEach(layer => {
      if (names.includes(layer.get("name"))) {
        filteredLayers.push(layer)
      }
    })
    return filteredLayers
  }

  /**
   * Returns the matching layer or create a new one if none exists.
   *
   * @param {*} name
   * @param {*} opts
   * @returns
   * @memberof Map
   */
  private getOrCreateLayer(name: string, opts: Record<string, any>): [VectorLayer, boolean] {
    const layers = this.getLayersByNames([name])
    let layer: VectorLayer, wasCreated: boolean
    switch (layers.length) {
      case 1:
        layer = (layers[0] as unknown) as VectorLayer
        wasCreated = false
        break
      case 0:
        layer = new VectorLayer(opts)
        layer.set("name", name)
        wasCreated = true
        break
      default:
        throw Error(`I found more than one layer with this name: ${name}`)
    }
    return [layer, wasCreated]
  }

  /**
   * Initialize a map.
   *
   * Assign the Controls, TileLayer and View to the map.
   * The default View position is `[lat: 0, lon: 45]` which centers it on the
   * northern hemisphere.
   *
   * @memberof Map
   */
  private buildMap(): OLMap {
    const mapboxLayer = new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        format: new MVT(),
        url: new Charon().getTileURL(),
        attributions:
          '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
      }),
    })

    const controls = [
      new Attribution({
        collapsible: true,
      }),
      new LayerPopup([mapboxLayer]),
      new OverviewMap({
        layers: [mapboxLayer],
      }),
      new Zoom(),
    ]

    const olmap = new OLMap({
      target: this.mapID,
      controls: controls,
      view: new View({
        center: fromLonLat([0, 45]),
        zoom: 2,
      }),
    })
    if (
      olmap
        .getLayers()
        .getArray()
        .indexOf(mapboxLayer) === -1
    ) {
      this.addVectorLayer("tiles", mapboxLayer, olmap)
    }

    this.applyMapboxStyle(mapboxLayer)
    return olmap
  }

  private async applyMapboxStyle(mapboxLayer: VectorTileLayer): Promise<void> {
    const glStyle = await new Charon().getStyle()

    const styleLayers: string[] = glStyle.layers
      .filter((layer: Record<string, any>) => {
        return layer.hasOwnProperty("source")
      })
      .map((layer: Record<string, any>) => layer.id)

    stylefunction(mapboxLayer, glStyle, styleLayers)
  }

  /**
   * Create a new cluster layer and add it to the map.
   *
   * @memberof Map
   */
  private buildClusterLayer(): void {
    this.clusterLayer = new ClusterLayer(60)
    this.clusterLayer.animatedCluster.setZIndex(this.zIndices.jobs)
    this.addVectorLayer("cluster", this.clusterLayer.animatedCluster)
  }

  /**
   * Job setter
   *
   * This overrides any previous jobs.
   *
   * @param jobs All jobs that you want to display.
   * @memberof Map
   */

  public setJobs(jobs: Job[]): void {
    log.debug("Setting jobs", jobs)
    this.clusterLayer.clear()
    this.clusterLayer.addJobs(jobs)
  }

  /**
   * Sets the View to new coordinates and zoom level.
   *
   * @param lon The latitude between `-90` and `90`.
   * @param  lat The longitude between `-180` and `180`.
   * @param  zoom Zoom is an integer value between `1` and `20`.
   * Bigger values equal zooming in.
   * @memberof Map
   */
  private setView(lon: number, lat: number, zoom: number): void {
    this.olmap.getView().setCenter([lat, lon])
    this.olmap.getView().setZoom(zoom)
  }

  /**
   * Sets the view to fit a specific layer into the viewport.
   *
   * Calculates the bounding box of the layer and zooms in accordingly.
   *
   * @param layer The VectorLayer you want to view.
   * @memberof Map
   */
  public zoomToLayer(layer: VectorLayer): void {
    const extent = layer.getSource().getExtent()
    this.olmap.getView().fit(extent, { duration: 1000 })
  }
}
