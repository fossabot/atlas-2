import axios from "axios"
import { log } from "./logger"
import { GeoJSON } from "geojson"
interface ForwardResult {
  geojson: Record<string, any>
  lat: number
  lon: number
}

/**
 * @description Nominatim API
 * @export
 * @class Nominatim
 */
export default class Nominatim {
  private apiURLBase: string
  private apiURLQueryParameters: string[]
  /**
   *Creates an instance of Nominatim.
   * @memberof Nominatim
   */
  public constructor() {
    this.apiURLBase = "https://nominatim.openstreetmap.org/search?q="
    this.apiURLQueryParameters = [
      "format=jsonv2",
      "polygon_geojson=1",
      "limit=1",
    ]
  }

  /**
   * @description Constructs an url from a search address and other paramters.
   * @param {string} address
   * @returns {string}
   * @memberof Nominatim
   */
  private buildURL(address: string): string {
    const url = "".concat(
      this.apiURLBase,
      address,
      "&",
      this.flattenParameters(),
    )
    return encodeURI(url)
  }

  /**
   * @description Extracts the needed information.
   * @param {({
   *     [key: string]: string | number,
   *   })} jsonData
   * @returns {({ [key: string]: string | number })}
   * @memberof Nominatim
   */
  private cleanJson(jsonData: Record<string, any>): ForwardResult {
    if (jsonData.length >= 1) {
      return {
        lat: Number(jsonData[0].lat),
        lon: Number(jsonData[0].lon),
        geojson: jsonData[0].geojson,
      }
    } else {
      throw new RangeError(
        "Json data did not have enough enough elements, expecting at least 1.",
      )
    }
  }

  /**
   * @description Transforms the parameters object into a string.
   * @param {{ [key: string]: string }} [parameters=this.apiURLQueryParameters]
   * @returns
   * @memberof Nominatim
   */
  private flattenParameters(
    parameters: string[] = this.apiURLQueryParameters,
  ): string {
    return parameters.join("&")
  }

  public getCountryFromLatLon(
    lat: number,
    lon: number,
  ): Promise<GeoJSON | undefined> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lon}&zoom=3&polygon_geojson=1`

    return axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        if (data.error) {
          return
        }
        return data
      })
      .catch(error => {
        log.error(error, { url })
      })
  }

  /**
   * @description Performs a forward search.
   * @param {string} address
   * @returns
   * @memberof Nominatim
   */
  public forwardSearch(
    address: string,
  ): Promise<{ result: ForwardResult | undefined; success: boolean }> {
    const url = this.buildURL(address)
    return axios.get(url).then(response => {
      try {
        return {
          result: this.cleanJson(response.data),
          success: true,
        }
      } catch {
        return {
          result: undefined,
          success: false,
        }
      }
    })
  }
}
