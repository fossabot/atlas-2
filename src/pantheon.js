// ESLint exception rule for NodeList
/* global NodeList:true */

import React, { Component } from "react"

import { log } from "./logger"
import Map from "./map"
import Sample from "./sample"

class Pantheon extends Component {
  polyfillForEach() {
    // @ts-ignore
    if (window.NodeList && !NodeList.prototype.forEach) {
      log.info("Polyfilling `forEach`")
      // @ts-ignore
      NodeList.prototype.forEach = Array.prototype.forEach
    }
  }

  initMap(mapID) {
    return new Map(mapID)
  }

  initSample() {
    const sample = new Sample()
    return sample
  }

  start() {
    const sample = this.initSample()
    sample.jobs(1000).then(jobs => {
      const map = this.initMap()
      map.setLocations(jobs, true)
    })
  }

  componentDidMount() {
    this.polyfillForEach()
    this.start()
  }

  render() {
    return (
      <div className="Pantheon">
        <h1> Hello, World! </h1>
        <p>Where is my map?</p>
        <div id="map-container"></div>
      </div>
    )
  }
}

export default Pantheon
