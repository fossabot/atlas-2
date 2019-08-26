// @flow

import axios from "axios"

import { log } from "./logger"

/**
 * @description Nominatim API
 * @export
 * @class Nominatim
 */
export default class Nominatim {
  apiURLBase: string
  apiURLQueryParameters: { [key: string]: string }
  /**
   *Creates an instance of Nominatim.
   * @memberof Nominatim
   */
  constructor() {
    this.apiURLBase = "https://nominatim.openstreetmap.org/search?q="
    this.apiURLQueryParameters = {
      format: "jsonv2",
      polygon_geojson: "1",
      limit: "1",
    }
  }

  /**
   * @description Constructs an url from a search address and other paramters.
   * @param {string} address
   * @returns {string}
   * @memberof Nominatim
   */
  buildURL(address: string): string {
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
  cleanJson(jsonData: {
    [key: string]: string | number,
  }): { [key: string]: string | number } {
    if (jsonData.length >= 1) {
      const cleanedJson = {}
      cleanedJson.lat = Number(jsonData[0].lat)
      cleanedJson.lon = Number(jsonData[0].lon)
      cleanedJson.geojson = jsonData[0].geojson
      return cleanedJson
    }
  }

  /**
   * @description Transforms the parameters object into a string.
   * @param {{ [key: string]: string }} [parameters=this.apiURLQueryParameters]
   * @returns
   * @memberof Nominatim
   */
  flattenParameters(
    parameters: { [key: string]: string } = this.apiURLQueryParameters,
  ): string {
    const parts: string[] = []
    for (const key in parameters) {
      parts.push(key + "=" + parameters[key])
    }
    return parts.join("&")
  }

  /**
   * @description Performs a forward search.
   * @param {string} address
   * @returns
   * @memberof Nominatim
   */
  forwardSearch(address: string) {
    const url = this.buildURL(address)
    return axios
      .get(url)
      .then(response => response.data)
      .then(json => {
        log.debug(json)
        return this.cleanJson(json)
      })
  }
}
