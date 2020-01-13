import { Map as OLMap } from "ol"
import BaseLayer from "ol/layer/Base"
import VectorLayer from "ol/layer/Vector"

import { Job, Location } from "./customTypes"
import Source from "ol/source/Source"

export declare interface MapInterface {
  jobs: Job[]
  olmap: OLMap
  setJobs: (jobs: Job[]) => void
  zoomToLayer(layer: VectorLayer): void
}

export declare interface Sample {
  jobs(): Promise<Job[]>
}

export declare interface JobLayer {
  addLocations(locations: Location[], draw?: boolean): void
  drawLocations(): void
  displayedLocations: Location[]
  distance: number
  clusterSource: Source
  animatedCluster: BaseLayer
}

export declare interface Geocoder {
  forward(search: string): Record<string, any>
  reverse(lat: number, lon: number): Record<string, any>
}
