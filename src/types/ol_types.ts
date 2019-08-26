import BaseLayer from "ol/layer/Base"

export declare class OLNotification {
  show(text: string): void
}

export declare class OLControl {}
export declare class OLInteraction {}

export declare class OLMap {
  addControl(control: OLControl | OLNotification): void
  addInteraction(interaction: any): void
  getView(): any
  addLayer(layer: BaseLayer): void
  removeLayer(layer: BaseLayer): void
  getLayers(): { array_: BaseLayer[] }
  getSize(): number[]
}

export declare class OLFeature {
  get(key: string): any
}

export declare class OLStyle {}

export declare class OLVectorSource {
  addFeatures(features: OLFeature[]): void
  clear(): void
}

export declare class OLCluster {
  getSource(): OLVectorSource
}

export declare class OLSelect {}

export declare class OLLayer {}
