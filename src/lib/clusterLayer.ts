/**
 *
 */
import AnimatedCluster from "ol-ext/layer/AnimatedCluster"
import Feature from "ol/Feature"
import Point from "ol/geom/Point"
import { fromLonLat } from "ol/proj.js"
import Cluster from "ol/source/Cluster"
import VectorSource from "ol/source/Vector"

import ClusterStyle from "../styles/cluster"
import { Job } from "../types/customTypes"
import VectorLayer from "ol/layer/Vector"
import { OLFeature } from "../types/olTypes"

export default class ClusterLayer implements ClusterLayer {
  private distance: number
  public clusterSource: Cluster
  public animatedCluster: VectorLayer
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
  }

  public addJobs(jobs: Job[]): void {
    const features: Feature[] = []
    jobs.forEach(job => {
      job.locations.forEach(location => {
        const newFeature = new Feature({
          geometry: new Point(fromLonLat([location.lon, location.lat])),
        })
        newFeature.set("job", job, false)
        features.push(newFeature)
      })
    })
    this.clusterSource.getSource().addFeatures(features)
  }

  public clear(): void {
    if (this.clusterSource.getSource()) {
      this.clusterSource.getSource().clear()
    }
  }
}
