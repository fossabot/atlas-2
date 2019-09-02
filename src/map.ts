import { Map as OLMap } from "ol"
import Bar from "ol-ext/control/Bar"
import Button from "ol-ext/control/Button"
import LayerPopup from "ol-ext/control/LayerPopup"
import Notification from "ol-ext/control/Notification"
import SearchFeature from "ol-ext/control/SearchFeature"
import Crop from "ol-ext/filter/Crop"
import Mask from "ol-ext/filter/Mask"
import { Attribution, defaults } from "ol/control.js"
import FullScreen from "ol/control/FullScreen"
import { platformModifierKeyOnly } from "ol/events/condition.js"
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
import { Fill, Stroke, Style } from "ol/style.js"
import View from "ol/View"

import ClusterLayer from "./clusterLayer"
import { log } from "./logger"
import PolygonStyle from "./styles/polygon"
import { MapInterface } from "./types/custom_interfaces"
import { Job, Location } from "./types/custom_types"
import { OLFeature, OLLayer, OLNotification, OLSelect } from "./types/ol_types"
import UI from "./ui"

/**
 * OpenLayers Map
 *
 * This class handles everything to display a map.
 *
 * @export
 * @param [mapID='map-container'] The id of the `<div>` element where the map will be placed.
 * @class Map
 */
export default class Map implements MapInterface {
  public jobs: Job[]
  private mapID: string
  private markerLayer: ClusterLayer
  public notification: OLNotification
  public olmap: OLMap
  private select: OLSelect
  public ui: UI

  /**
   *Creates an instance of Map.
   * @param [mapID="map-container"]
   * @memberof Map
   */
  public constructor(mapID: string = "map-container") {
    log.debug("Initializing map", { mapID })
    this.mapID = mapID
    // this.ui = new UI(this)

    this.jobs = []
    this.olmap = this.buildMap()
    this.buildMarkerLayer()
    this.addControls()
    this.addCircleSelect()
    this.select = this.addSelect()
    this.notification = this.addNotifications()
  }

  /**
   * Adds the functionality to display notifications.
   * Should be called in the constructor.
   *
   * @returns
   * @memberof Map
   */
  private addNotifications(): OLNotification {
    const notification: OLNotification = new Notification()
    this.olmap.addControl(notification)
    return notification
  }

  /**
   * Displays a notification box
   *
   * @param text - Can be anything but a string probably makes the most sense.
   * @memberof Map
   */
  private notify(text: string): void {
    this.notification.show(text)
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

    mainbar.addControl(this.featureSearch())
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
   * Adds the feature search.
   * The user can search the displayed markers and
   *
   * @returns
   * @memberof Map
   */
  private featureSearch(): OLFeature {
    const search = new SearchFeature({
      source: this.markerLayer.clusterSource.getSource(),
      property: "search",
    })

    search.on("select", (e: any) => {
      const center = e.search.getGeometry().getFirstCoordinate()
      this.zoomTo(center)
    })

    return search
  }

  /**
   * Moves the map to the specified coordinates and sets the zoomlevel.
   *
   * @param {*} center
   * @param {*} [zoom=-1]
   * @memberof Map
   */
  private zoomTo(center: number[], zoom: number = 16): void {
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
    const drawLayer = new VectorLayer({
      source: new VectorSource(),
    })
    // drawLayer = this.olmap.layers
    this.olmap.addLayer(drawLayer)
    const modify = new Modify({
      source: drawLayer.getSource(),
    })
    this.olmap.addInteraction(modify)
    const draw: Draw = new Draw({
      source: drawLayer.getSource(),
      // @ts-ignore
      type: "CIRCLE",
      wrapX: true,
      style: new Style({
        fill: new Fill({
          color: "rgba(0,0,0,0)",
        }),
        stroke: new Stroke({
          color: "rgba(200,0,0,1)",
          width: 1,
        }),
      }),
      name: "drawInteraction",
    })
    this.olmap.addInteraction(draw)

    draw.on("drawstart", () => {
      drawLayer.getSource().clear()
      const layer = this.getLayerByName("greyout")
      if (typeof layer !== "undefined") {
        this.olmap.removeLayer(layer)
      }
    })

    modify.on("modifystart", () => {
      const layer = this.getLayerByName("greyout")
      if (typeof layer !== "undefined") {
        this.olmap.removeLayer(layer)
      }
    })

    modify.on("modifyend", e => {
      if (e.features.get("array_")[0]) {
        this.handleDrawEnd(e.features.get("array_")[0])
      }
    })

    draw.on("drawend", e => {
      if (e.feature) {
        this.handleDrawEnd(e.feature)
      }
    })
  }

  /**
   * Handle notification and call the this.crop
   *
   * @param {*} circle
   * @memberof Map
   */
  private handleDrawEnd(circle: Feature): void {
    // TODO Radius calculation. Needs to use projection
    // https://stackoverflow.com/questions/32202944/openlayers-3-circle-radius-in-meters
    this.notify("Radius: ~" + this.getRadius(circle).toFixed(0) + " m")
    const feature = this.makeFeatureFromCircle(circle)
    this.crop(feature)
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
   * @description Generates a new layer and adds the geojson data as feature
   * @param {*} geojson
   * @returns
   * @memberof Map
   */
  public featureLayerFromGeoJson(geojson: JSON): VectorLayer {
    const layer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(geojson, {
          featureProjection: "EPSG:3857",
        }),
      }),
      style: new PolygonStyle().style(),
    })
    this.olmap.addLayer(layer)
    this.crop(layer.getSource().getFeatures()[0])
    return layer
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
  private getLayerByName(name: string): OLLayer | undefined {
    const layers = this.olmap.getLayers()
    for (const layer of layers.get("array_")) {
      if (layer.get("name") === name) {
        return layer
      }
    }
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
  private getOrCreateLayer(name: string, opts: Record<string, any>): OLLayer {
    let layer = this.getLayerByName(name)
    if (typeof layer === "undefined") {
      const newLayer = new TileLayer(opts)
      layer = (newLayer as unknown) as OLLayer
      this.olmap.addLayer(layer)
    }
    return layer
  }

  /**
   * Adds a greyed-out look to the map.
   * Greys out everything except the inside of the feature.
   *
   * @param feature
   * @memberof Map
   */
  private crop(feature: OLFeature): void {
    const crop = new Crop({
      feature: feature,
      inner: true,
      fill: new Fill({
        color: [0, 0, 0, 0.5],
      }),
    })
    const mask = new Mask({
      feature: feature,
      inner: false,
      fill: new Fill({ color: [0, 0, 0, 0.4] }),
    })

    const greyOutLayer = this.getOrCreateLayer("greyout", {
      name: "greyout",
      source: new OSM(),
    })
    greyOutLayer.addFilter(crop)
    greyOutLayer.addFilter(mask)
  }

  /**
   * Adds ability to click on a cluster and displays the individual jobs
   * in the jobList.
   *
   * @returns
   * @memberof Map
   */
  private addSelect(): OLSelect {
    const select = new Select({
      condition: platformModifierKeyOnly,
    })
    this.olmap.addInteraction(select)

    /*
    TODO: rework UI
    select.on("select", e => {
      const c = e.selected
      if (c.length === 1) {
        const feature = c[0]
        this.ui.updateJobList(feature) 
      }
    })
*/
    return select
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
        new LayerPopup(),
        new Attribution({
          collapsible: true,
        }),
      ]),
      layers: [
        new TileLayer({
          source: new OSM({
            wrapX: true,
          }),
        }),
        /*
        new TileLayer({
          title: "OpenRailwayMap",

          source: new XYZ({
            url:
              "https://{a-c}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
            attributions:
              'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
          }),
        }),
        */
        // new VectorTileLayer({
        //   source: new VectorTileSource({
        //     format: new MVT(),
        //     url:
        //       "http://jbs-osm.informatik.fh-nuernberg.de:18000/maps/osm/{z}/{x}/{y}.pbf",
        //   }),
        //   style: vectorStyle,
        // }),
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
    this.markerLayer = new ClusterLayer(60, this.ui)
    this.olmap.addLayer(this.markerLayer.animatedCluster)
  }

  /**
   * Job setter
   *
   * Sets the internal jobs. This overrides any previous jobs.
   * If you want to add jobs to the existing pool you need to read `this.jobs`
   * and then set all jobs again.
   * All jobs can be accessed in this
   * [callback]{@link Interaction#setSelectCallback} function.
   *
   * @param locations All locations that you want to display.
   * @param [draw=false] If True `this.markerLayer.drawLocations(locations)`
   * will get called and the locations will get rendered immediately.
   * @memberof Map
   */

  private setLocations(locations: Location[], draw: boolean = false): void {
    // this.ui.updateFromLocations(locations)

    this.markerLayer.addLocations(locations)
    if (draw) {
      this.markerLayer.drawLocations()
    }
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
