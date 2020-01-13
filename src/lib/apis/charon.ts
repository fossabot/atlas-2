/**
 *
 */
import { GeocodingResponseObject } from "../../types/customTypes"
export default class Charon {
  private serverURL: string
  public constructor() {
    this.serverURL = "http://jbs-osm.informatik.fh-nuernberg.de:52000"
  }

  public getTileURL(): string {
    return this.serverURL + "/tile?x={x}&y={y}&z={z}"
  }

  public getStyle(): Promise<Record<string, any>> {
    return fetch(this.serverURL + "/style").then(r => r.json())
  }

  public async forwardGeocoding(search: string, types: string[]): Promise<GeocodingResponseObject | undefined> {
    let url = this.serverURL + `/geocoding/forward?search=${search}`
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
