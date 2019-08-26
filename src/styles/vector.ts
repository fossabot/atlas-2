import { Fill, Stroke, Style } from "ol/style.js"

import { log } from "../logger"

export const defaultStyle = new Style({
  fill: new Fill({
    color: [234, 231, 221, 1],
  }),
  stroke: new Stroke({
    color: [182, 177, 162, 1],
    width: 1,
  }),
})

export const streetStyle = new Style({
  fill: new Fill({
    color: [255, 44, 173, 1],
  }),
  stroke: new Stroke({
    color: [255, 32, 150, 1],
    width: 1,
  }),
})
export const buildingStyle = new Style({
  fill: new Fill({
    color: [44, 44, 255, 0.5],
  }),
  stroke: new Stroke({
    color: [44, 32, 255, 1],
    width: 1,
  }),
})

/**
 *
 *
 * @export
 * @param {*} feature
 * @param {*} resolution
 * @returns
 */
export function vectorStyle(feature, resolution) {
  log.info(feature.get("layer"))
  if (
    feature.get("layer") === "populated_places" ||
    feature.get("layer") === "buildings"
  ) {
    return [buildingStyle]
  }
  if (feature.get("layer") === "transport_lines") {
    return [streetStyle]
  }
  if (
    feature.get("layer") === "country_polygons" ||
    feature.get("layer") === "landuse_areas"
  ) {
    return null // return null for no style to be applied
  }
  return [defaultStyle]
}
