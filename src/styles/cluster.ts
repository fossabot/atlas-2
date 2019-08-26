// @flow

import { Icon, Stroke, Style, Text } from "ol/style.js"
import Fill from "ol/style/Fill"
import RegularShape from "ol/style/RegularShape"

import { log } from "../logger"
import { OLFeature } from "../types/ol_types"
import { bound } from "../util"

// import score1 from "../../static/img/marker/score1.png"
// import score2 from "../../static/img/marker/score2.png"
// import score3 from "../../static/img/marker/score3.png"
// import score4 from "../../static/img/marker/score4.png"
// import score5 from "../../static/img/marker/score5.png"

// const scoreImages = [score1, score2, score3, score4, score5]

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
  private constructor(
    colorGradient: string[] = [
      "rgb(252,251,253)",
      "rgb(239,237,245)",
      "rgb(218,218,235)",
      "rgb(188,189,220)",
      "rgb(158,154,200)",
      "rgb(128,125,186)",
      "rgb(106,81,163)",
      "rgb(84,39,143)",
      "rgb(63,0,125)",
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
  private colorByScore(score: number, minScore: number = 0.5): string {
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
      const location: ILocation = feature.get("location")
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
  polygonStyle(score: number, scale: number, size: number): OLSytyle {
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
   * Return an image style according to score, scale and size
   *
   * @param score
   * @param  scale
   * @param  size
   * @returns
   * @memberof ClusterStyle
   */
  imageStyle(score: number, scale: number, size: number): OLStyle {
    return new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        anchorXUnits: "fraction",
        anchorYUnits: "fraction",
        scale,
        src: this.pictureByScore(score),
      }),
      text: new Text({
        fill: new Fill({
          color: "#000",
        }),
        text: size.toString() + " Jobs",
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
  style(cluster: OLFeature): OLStyle[] {
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
  getScore(feature: OLFeature): number {
    /*
     * We need to unpack the feature by taking the `features` value.
     * This returns an array of features and we can take the first element
     * to get the `location` value of that element.
     */
    const subfeatures: OLFeature[] = feature.get("features")

    if (subfeatures && subfeatures.length === 1) {
      const location: ILocation = subfeatures[0].get("location")
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
  selectedStyle(cluster: OLFeature) {
    const size = 1
    const score = this.getScore(cluster)
    // Scale is within [0.2, 0.4]
    const scale = Math.min(0.4, Math.max(size * 0.03, 0.2))
    const style = this.polygonStyle(score, scale, size)
    return [style]
  }

  /**
   * Select a picture to be displayed according to a score.
   *
   * @param  score
   * @param [minScore=0.5]
   * @returns
   * @memberof ClusterStyle
   */
  pictureByScore(score: number, minScore: number = 0.5) {
    if (score < 0 || score > 1) {
      throw new RangeError("score must be between 0 and 1, including 0 and 1.")
    }

    const step = (1 - minScore) / scoreImages.length
    const index = Math.floor(Math.max(0, (score - minScore) / step))
    return scoreImages[index]
  }
}
