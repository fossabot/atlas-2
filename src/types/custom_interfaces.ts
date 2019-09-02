import { Map as OLMap } from "ol"
import BaseLayer from "ol/layer/Base"

import Map from "../map"
import { Elements, Job, Location } from "./custom_types"
import { OLCluster, OLLayer, OLNotification } from "./ol_types"

export declare interface MapInterface {
  ui: UserInterface
  jobs: Job[]
  olmap: OLMap
  notification: OLNotification

  zoomToLayer(layer: OLLayer): void
  featureLayerFromGeoJson(geojson: any): void
}

export declare interface UserInterface {
  map: Map
  wantedElements: string[]
  elements: Elements

  updateUI(element: string, inner: string): void
  updateCorporations(count: number): void
  updateAllJobs(count: number): void
  updateActiveJobs(count: number): void
  updateFromLocations(locations: Location[]): void
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
