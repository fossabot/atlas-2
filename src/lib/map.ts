import { Map as OLMap } from "ol"
import Bar from "ol-ext/control/Bar"
import Button from "ol-ext/control/Button"
import LayerPopup from "ol-ext/control/LayerPopup"
import Crop from "ol-ext/filter/Crop"
import Mask from "ol-ext/filter/Mask"
import Layer from "ol/layer"
import { Attribution, defaults } from "ol/control"
import FullScreen from "ol/control/FullScreen"
import { platformModifierKeyOnly, shiftKeyOnly } from "ol/events/condition"
import Feature from "ol/Feature"
import GeoJSON from "ol/format/GeoJSON"
import { fromCircle } from "ol/geom/Polygon"
import { Draw, Modify } from "ol/interaction"
import Select from "ol/interaction/Select"
import TileLayer from "ol/layer/Tile"
import VectorLayer from "ol/layer/Vector"
import { fromLonLat } from "ol/proj"
import OSM from "ol/source/OSM"
import VectorSource from "ol/source/Vector"
import { Fill, Stroke, Style } from "ol/style"
import View from "ol/View"
import PolygonStyle from "../styles/polygon"
import { MapInterface } from "../types/customInterfaces"
import { Job } from "../types/customTypes"
import ClusterLayer from "./clusterLayer"
import { log } from "./logger"
import { onClick as countryOnClick, countryLayer } from "./countryLayer"

/**
 * OpenLayers Map
 *
 * This class handles everything to display a map.
 *
 * @export
 * @param [mapID='map'] The id of the `<div>` element where the map will be placed.
 * @class Map
 */
export default class Map implements MapInterface {
  public jobs: Job[]
  private mapID: string
  private markerLayer: ClusterLayer
  public olmap: OLMap

  /**
   *Creates an instance of Map.
   * @param [mapID="map"]
   * @memberof Map
   */
  public constructor(mapID = "map") {
    log.debug("Initializing map", { mapID })
    this.mapID = mapID
    // this.ui = new UI(this)

    this.jobs = []
    this.olmap = this.buildMap()
    this.buildMarkerLayer()
    this.addControls()
    this.addCircleSelect()
  }

  addCountryLayer(callback?: (features: any[]) => void): void {
    this.olmap.addLayer(countryLayer)
    countryOnClick(this.olmap, callback)
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
    mainbar.addControl(this.selectRemoveButton())
    return mainbar
  }

  /**
   * @description Adds a new Button to remove a selection.
   * @returns
   * @memberof Map
   */
  private selectRemoveButton(): void {
    return new Button({
      html: "R",
      className: "",
      title: "Remove Selection",
      handleClick: () => {
        this.removeCrop()
      },
    })
  }

  /**
   * @description Removes the greyout and selectLayer from the map
   * @memberof Map
   */
  private removeCrop(): void {
    this.removeLayerByName("greyout")
    for (const layerName of ["draw", "geojson"]) {
      this.clearSource(layerName)
    }
  }

  /**
   * @description clears the source of a layer specified by its name.
   * @param {string} layerName
   * @memberof Map
   */
  private clearSource(layerName: string): void {
    const layer = this.getLayerByName(layerName)
    if (typeof layer !== "undefined") {
      layer.getSource().clear()
    }
  }

  /**
   * @description Removes an entire layer from the map.
   * @param {string} name
   * @memberof Map
   */
  private removeLayerByName(name: string): void {
    const layer = this.getLayerByName(name)
    if (typeof layer !== "undefined") {
      this.olmap.removeLayer(layer)
    }
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
    const drawLayer = this.recreateDrawLayer()
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
    })

    draw.on("drawstart", () => {})

    this.olmap.addInteraction(draw)
  }

  private recreateDrawLayer(): VectorLayer {
    this.removeLayerByName("drawLayer")
    const layer = new VectorLayer({
      source: new VectorSource(),
    })
    layer.set("name", "drawLayer")
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
  private getLayerByName(name: string): VectorLayer | undefined {
    const layers = this.olmap.getLayers()
    layers.forEach(layer => {
      if (layer.get("name") === name) {
        return layer
      }
    })
    return undefined
  }

  /**
   * Returns the matching layer or create a new one if none exists.
   *
   * @param {*} name
   * @param {*} opts
   * @returns
   * @memberof Map
   */
  private getOrCreateLayer(
    name: string,
    opts: Record<string, any>,
  ): VectorLayer {
    let layer = this.getLayerByName(name)
    if (typeof layer === "undefined") {
      layer = new VectorLayer(opts)
      layer.set("name", name)
      return layer
    }
    return layer
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
    /**
     *
     *
     * @param {*} feature
     * @param {*} resolution
     * @returns
     */

    return new OLMap({
      target: this.mapID,
      controls: defaults({ attribution: false }).extend([
        new Attribution({
          collapsible: true,
        }),
        new LayerPopup(),
      ]),
      layers: [
        new TileLayer({
          source: new OSM({
            wrapX: true,
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 45]),
        zoom: 2,
      }),
    })
  }

  /**
   * Create a new cluster layer and add it to the map.
   *
   * @memberof Map
   */
  private buildMarkerLayer(): void {
    this.markerLayer = new ClusterLayer(60)
    this.olmap.addLayer(this.markerLayer.animatedCluster)
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
    // this.ui.updateFromjobs(jobs)
    log.info("Setting jobs", jobs)
    this.markerLayer.clear()
    this.markerLayer.addJobs(jobs)
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
