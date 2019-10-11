import { Map as OLMap } from "ol"
import BaseLayer from "ol/layer/Base"
import VectorLayer from "ol/layer/Vector"

import { Job, Location } from "./customTypes"
import { OLCluster } from "./olTypes"

export declare interface MapInterface {
  jobs: Job[]
  olmap: OLMap
  setJobs: (jobs: Job[]) => void
  zoomToLayer(layer: VectorLayer): void
}

export declare interface Sample {
  jobs(): Promise<Job[]>
}

export declare interface ClusterLayer {
  addLocations(locations: Location[], draw?: boolean): void
  drawLocations(): void
  displayedLocations: Location[]
  distance: number
  clusterSource: OLCluster
  animatedCluster: BaseLayer
}
