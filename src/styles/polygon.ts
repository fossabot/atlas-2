// @flow

import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import Style from "ol/style/Style"

/**
 * Handler for polygon styling.
 *
 * @param {boolean} [selected=false] - Whether or not the polygon is currently selected.
 *
 * @export
 * @class PolygonStyle
 */
export default class PolygonStyle {
  selected: boolean
  /**
   *Creates an instance of PolygonStyle.
   * @param selected Whether the polygon is currently selected or not.
   * @memberof PolygonStyle
   */
  constructor(selected: boolean = false) {
    this.selected = selected
  }

  /**
   * Calculate the styling for each polygon.
   *
   * @returns {Style}
   * @memberof ClusterStyle
   */
  style() {
    if (this.selected) {
      return new Style({
        fill: new Fill({
          color: "rgba(5,25,35,0.4)",
        }),
        stroke: new Stroke({
          color: "rgba(0,0,0,0)",
          width: 0,
        }),
      })
    }
    return new Style({
      fill: new Fill({
        color: "rgba(224,236,244,0.3)",
      }),
      stroke: new Stroke({
        color: "rgba(129,15,124,0.7)",
        width: 2,
      }),
    })
  }
}
