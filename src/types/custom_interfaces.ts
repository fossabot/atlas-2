import { IElements, IJob, ILocation } from "./custom_types"
import {
  OLCluster,
  OLFeature,
  OLLayer,
  OLMap,
  OLNotification,
  OLSelect,
} from "./ol_types"
import { OLEXTAnimatedCluster } from "./ol-ext_types"

export declare interface IMap {
  mapID: string
  ui: IUI
  jobs: IJob[]
  olmap: OLMap
  select: OLSelect
  notification: OLNotification

  zoomToLayer(layer: VectorLayer): void
  featureLayerFromGeoJson(geojson: any): void
}

export declare interface IUI {
  map: IMap
  wantedElements: string[]
  elements: IElements

  loadElements(wantedElements: string[]): IElements
  updateUI(element: string, inner: string): void
  updateCorporations(count: number): void
  updateAllJobs(count: number): void
  updateActiveJobs(count: number): void
  updateJobList(feature: OLFeature): void
  updateFromLocations(locations: ILocation[]): void
}

export declare interface ISample {
  jobs(): Promise<IJob[]>
}

export declare interface IClusterLayer {
  addLocations(locations: ILocation[], draw?: boolean): void
  drawLocations(): void
  displayedLocations: ILocation[]
  distance: number
  clusterSource: OLCluster
  animatedCluster: OLEXTAnimatedCluster
}
