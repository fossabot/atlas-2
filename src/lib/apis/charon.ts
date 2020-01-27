/**
 *
 */
import { GeocodingResponseObject } from "../../types/customTypes"
export default class Charon {
  private serverURL: string
  private token: string
  public constructor() {
    this.token = "pk.eyJ1IjoiY2hyb25hcmsiLCJhIjoiY2syeDdsN28yMDkyMTNqcG1nOTg1b2R2ZSJ9.FcG7FQhEkuBgB656DzLbCg"
    this.serverURL = ""
  }

  public getTileURL(): string {
    return "https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/{z}/{x}/{y}.mvt?access_token=" + this.token
  }

  public getStyle(): Promise<Record<string, any>> {
    return fetch(
      "https://api.mapbox.com/styles/v1/chronark/ck3resq750c111co05d682ths?access_token=" + this.token,
    ).then(r => r.json())
  }

  public async forwardGeocoding(search: string, types: string[]): Promise<GeocodingResponseObject | undefined> {
    const parameters = ["q=" + search, "format=geojson", "polygon_geojson=1"]
    let url = "https://nominatim.openstreetmap.org/search?" + parameters.join("&")
    console.log(url)
    if (types.length > 0) {
      url += `&types=${types.join(",")}`
    }
    const response = await fetch(url)
    if (response.status === 200) {
      const json = await response.json()
      return json
    }
    return undefined
  }
}
