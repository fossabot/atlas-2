// @flow

// ESLint exception rule for NodeList
/* global NodeList:true */

import "../static/css/ol-ext.css"
import "../static/css/ol.css"

import { log } from "./logger"
import Map from "./map"
import Sample from "./sample"

// import "../static/css/popup.css"

/**
 * Pantheon
 *
 * Highlevel API to simplify interaction with this library
 */
export default class Pantheon {
  /**
   *Creates an instance of Pantheon.
   * @memberof Pantheon
   */
  constructor() {
    this.polyfillForEach()
  }

  /**
   * Polyfill for `forEach`
   *
   * IE11 does not support forEach loops, so we have to polyfill it.
   * This is needed because the ol-ext layerswitcher plugin is using forEach
   *
   * @memberof Pantheon
   */
  polyfillForEach(): void {
    if (window.NodeList && !NodeList.prototype.forEach) {
      log.info("Polyfilling `forEach`")
      NodeList.prototype.forEach = Array.prototype.forEach
    }
  }

  /**
   * Creates a map object to handle everything.
   */
  initMap(mapID: string): Map {
    return new Map(mapID)
  }

  /**
   * Inits sample
   */
  initSample(): Sample {
    const sample: Sample = new Sample()
    return sample
  }
}
