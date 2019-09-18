// @flow

import { Stroke, Style, Text } from "ol/style.js"
import Fill from "ol/style/Fill"
import RegularShape from "ol/style/RegularShape"

import { log } from "../logger"
import { Location } from "../types/custom_types"
import { OLFeature, OLStyle } from "../types/ol_types"
import { bound } from "../util"

/**
 * Handles definition of a style for clusters.
 * @description some description
 * @export
 * @class ClusterStyle
 */
export default class ClusterStyle {
  private colorGradient: string[]
  /**
   *Creates an instance of ClusterStyle.
   * @param {string[]} [colorGradient=[
   *       "#ffffcc",
   *       "#fed976",
   *       "#fd8d3c",
   *       "#e31a1c",
   *       "#800026",
   *     ]]
   * @memberof ClusterStyle
   */
  public constructor(
    colorGradient: string[] = [
      "rgb(112,148,194)",
      "rgb(103,142,191)",
      "rgb(93,135,188)",
      "rgb(84,129,186)",
      "rgb(47,103,174)",
      "rgb(75,122,183)",
      "rgb(65,116,180)",
      "rgb(56,109,177)",
      "rgb(37,96,171)",
      "rgb(28,90,168)",
      "rgb(19,83,166)",
      "rgb(9,77,163)",
      "rgb(0,70,160)",
    ],
  ) {
    this.colorGradient = colorGradient
  }

  /**
   * Calculates a color depending on a given score.
   *
   * The interval between `minScore` and `1` gets populated with colors
   * and the right colour will be returned.
   *
   * @param score Must be between `[0.0 - 1.0]`.
   * @returns Returns a color in hexadezimal format
   * @memberof ClusterStyle
   *
   * @example
   * colorByScore(0.75)
   * // returns '#881AC1'
   */
  private colorByScore(score: number, minScore = 0.5): string {
    log.debug("Calculating color by score")
    if (score < 0 || score > 1) {
      throw new RangeError("score must be between 0 and 1, including 0 and 1.")
    }
    if (minScore < 0 || minScore > 1) {
      throw new RangeError(
        "minScore must be between 0 and 1, including 0 and 1.",
      )
    }
    if (minScore >= score) {
      return this.colorGradient[0]
    }
    const step = (1 - minScore) / this.colorGradient.length
    const index = Math.floor((score - minScore) / step)

    return this.colorGradient[index]
  }

  /**
   * Calculate the maximum score of a list of features.
   *
   * @param  features
   * @param  features.score - The individual score of a location between `0` and `1`
   * @returns  The maximum score of a list of locations between `0` and `1`
   * @memberof ClusterStyle
   * @example
   * const f = [
   *  {
   *    location: {
   *      score: 0.45
   *    }
   *  },
   * ]
   * maxScore(f)
   * // returns 0.45
   */
  private maxScore(features: OLFeature[]): number {
    let maxScore = 0
    for (const feature of features) {
      const location: Location = feature.get("location")
      const score: number = location.score
      maxScore = Math.max(maxScore, score)
    }
    return maxScore
  }

  /**
   * @description Create a style for clusters.
   * @param {Number} score
   * @param {Number} scale
   * @param {number} size
   * @returns {OLSytyle}
   * @memberof ClusterStyle
   */
  private polygonStyle(score: number, scale: number, size: number): OLStyle {
    const radius = bound(15, size, 25)
    return new Style({
      image: new RegularShape({
        points: 4,
        angle: Math.PI,
        radius: radius,
        stroke: new Stroke({
          color: this.colorByScore(score, 0.5),
          width: bound(1, radius / 4, radius),
          lineCap: "square",
          lineJoin: "miter",
        }),
        fill: new Fill({
          color: "rgba(255,255,255,0.8)",
        }),
      }),
      text: new Text({
        text: size.toString(),
        scale: 1,
        fill: new Fill({
          color: "#000",
        }),
      }),
    })
  }

  /**
   * Return a ol.Style for clusters
   *
   * @param cluster
   * @returns An array with a single `OLStyle` element.
   * This is necessary because OL expects an array.
   * @memberof ClusterStyle
   */
  public style(cluster: OLFeature): OLStyle[] {
    const features: OLFeature[] = cluster.get("features")
    const size = features.length
    if (size === 1) {
      return this.selectedStyle(cluster)
    } else {
      const score = this.maxScore(features)
      const scale = bound(0.2, size, 0.4)
      const style = this.polygonStyle(score, scale, size)

      return [style]
    }
  }

  /**
   * Extract the score from a single feature.
   *
   * @param  feature
   * @returns
   * @memberof ClusterStyle
   */
  private getScore(feature: OLFeature): number {
    /*
     * We need to unpack the feature by taking the `features` value.
     * This returns an array of features and we can take the first element
     * to get the `location` value of that element.
     */
    const subfeatures: OLFeature[] = feature.get("features")

    if (subfeatures && subfeatures.length === 1) {
      const location: Location = subfeatures[0].get("location")
      return location.score
    }

    return 0
  }

  /**
   * Return a style for a cluster that is currently selected
   *
   * @param  cluster
   * @returns
   * @memberof ClusterStyle
   */
  private selectedStyle(cluster: OLFeature): OLStyle[] {
    const size = 1
    const score = this.getScore(cluster)
    // Scale is within [0.2, 0.4]
    const scale = Math.min(0.4, Math.max(size * 0.03, 0.2))
    const style = this.polygonStyle(score, scale, size)
    return [style]
  }
}
