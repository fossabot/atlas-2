import BaseLayer from "ol/layer/Base"

export declare class OLNotification {
  private show(text: string): void
}

export declare class OLControl {}
export declare class OLInteraction {}

export declare class OLMap {
  private addControl(control: OLControl | OLNotification): void
  private addInteraction(interaction: any): void
  private getView(): any
  private addLayer(layer: BaseLayer): void
  private removeLayer(layer: BaseLayer): void
  private getLayers(): { array_: BaseLayer[] }
  private getSize(): number[]
}

export declare class OLFeature {
  get(key: string): any
}

export declare class OLStyle {}

export declare class OLVectorSource {
  private addFeatures(features: OLFeature[]): void
  private clear(): void
}

export declare class OLCluster {
  private getSource(): OLVectorSource
}

export declare class OLSelect {}

export declare class OLLayer {
  public addFilter(mask: any): void
}
