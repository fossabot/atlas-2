/**
 *
 */
import { GeocodingResponseObject } from "../../types/customTypes"
import Axios from "axios"
export default class Charon {
  private serverURL: string
  public constructor() {
    this.serverURL = "http://localhost:52000"
  }

  public getTileURL(): string {
    return this.serverURL + "/tile/?x={x}&y={y}&z={z}"
  }

  public getStyle(): Promise<Record<string, any>> {
    return fetch(this.serverURL + "/style").then(r => r.json())
  }

  public async forwardGeocoding(search: string): Promise<any | undefined> {
    const url = this.serverURL + `/geocoding/forward/?query=${search}`

    const response = await fetch(url, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.status === 200) {
      const json = await response.json()
      return {
        lat: Number(json[0].lat),
        lon: Number(json[0].lon),
        geojson: json[0].geojson,
      }
    }
    return undefined
  }

  public async reverseGeocoding(lat: number, lon: number): Promise<GeocodingResponseObject | undefined> {
    const url = this.serverURL + `/geocoding/reverse/?lat=${lat}&lon=${lon}`
    console.log(url)
    const response = await Axios.get(url)
    if (response.status === 200) {
      console.log(response)
      const json = response.data
      console.log(json)
      return json
    }
    return undefined
  }
}
