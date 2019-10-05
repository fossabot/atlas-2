// @flow

import AnimatedCluster from "ol-ext/layer/AnimatedCluster"
import Feature from "ol/Feature"
import Point from "ol/geom/Point"
import BaseLayer from "ol/layer/Base"
import { fromLonLat } from "ol/proj.js"
import Cluster from "ol/source/Cluster"
import VectorSource from "ol/source/Vector"

import ClusterStyle from "../styles/cluster"
// TODO REFACTOR TO USE JOB INSTEAD OF LOCATION
import { Location } from "../types/custom_types"
import { includes } from "./util"

/**
 * Handles clustering of locations
 */
export default class ClusterLayer implements ClusterLayer {
  private distance: number
  public clusterSource: Cluster
  public animatedCluster: BaseLayer
  /**
   *Creates an instance of ClusterLayer.
   * @param [distance=40]
   * @memberof ClusterLayer
   */
  public constructor(distance = 40) {
    // sets up an empty cluster layer
    this.distance = distance
    this.clusterSource = new Cluster({
      distance: this.distance,
      source: new VectorSource(),
    })
    this.animatedCluster = new AnimatedCluster({
      name: "Jobs",
      source: this.clusterSource,
      style(cluster: Cluster) {
        return new ClusterStyle().style(cluster)
      },
    })
    this.animatedCluster.setZIndex(100)
    // this.ui = ui
  }

  /**
   * Pushes all locations in 'this.displayedLocations' into the clusterSource and renders them.
   */
  public drawLocations(locations: Location[]): void {
    const features = []
    for (const location of locations) {
      const newFeature = new Feature({
        geometry: new Point(fromLonLat([location.lon, location.lat])),
      })
      newFeature.set("location", location, false)
      const searchString = `${location.corp} - ${location.title}`
      newFeature.set("search", searchString)
      features.push(newFeature)
    }
    this.clusterSource.getSource().addFeatures(features)
  }

  /**
   * Removes all elements of the clusterSource
   */
  public clear(): void {
    if (this.clusterSource.getSource()) {
      this.clusterSource.getSource().clear()
    }
  }
}
