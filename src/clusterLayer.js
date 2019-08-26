// @flow

import AnimatedCluster from "ol-ext/layer/AnimatedCluster"
import Feature from "ol/Feature"
import Point from "ol/geom/Point"
import { fromLonLat } from "ol/proj.js"
import Cluster from "ol/source/Cluster"
import VectorSource from "ol/source/Vector"

import ClusterStyle from "./styles/cluster"
import { includes } from "./util"

/**
 * Handles clustering of locations
 */
export default class ClusterLayer implements IClusterLayer {
  private displayedLocations: ILocation[]
  private distance: number
  private clusterSource: OLCluster
  private animatedCluster: OLEXTAnimatedCluster
  private ui: UI
  /**
   *Creates an instance of ClusterLayer.
   * @param [distance=40]
   * @memberof ClusterLayer
   */
  public constructor(distance: number = 40, ui: UI) {
    // sets up an empty cluster layer
    this.displayedLocations = []
    this.distance = distance
    this.clusterSource = new Cluster({
      distance: this.distance,
      source: new VectorSource(),
    })
    this.animatedCluster = new AnimatedCluster({
      name: "Jobs",
      source: this.clusterSource,
      style(cluster) {
        return new ClusterStyle().style(cluster)
      },
    })
    this.animatedCluster.setZIndex(100)
    this.ui = ui
  }

  /**
   * Pushes all locations in 'this.displayedLocations' into the clusterSource and renders them.
   */
  drawLocations(displayedLocations: ILocation[] = this.displayedLocations) {
    const features = []
    for (const location of displayedLocations) {
      const newFeature = new Feature({
        geometry: new Point(fromLonLat([location.lon, location.lat])),
      })
      newFeature.set("location", location, false)
      const searchString = `${location.corp} - ${location.title}`
      newFeature.set("search", searchString)
      features.push(newFeature)
    }
    this.clusterSource.getSource().addFeatures(features)

    this.ui.updateActiveJobs(displayedLocations.length)
  }

  /**
   * Adds more locations. Call @link drawLocations to render them immediately.
   * @param locations
   */
  addLocations(locations: ILocation[]): void {
    for (const location: ILocation of locations) {
      this.displayedLocations.push(location)
    }
  }

  /**
   * Removes all elements of the clusterSource
   */
  clear(): void {
    if (this.clusterSource.getSource()) {
      this.clusterSource.getSource().clear()
    }
  }

  /**
   * Remove all supplied locations from the displayedLocations
   * @param locations
   */
  removeLocations(locations: ILocation[] = []) {
    const difference = this.displayedLocations.filter(
      job => !includes(locations, job),
    )
    this.displayedLocations = difference
  }
}
