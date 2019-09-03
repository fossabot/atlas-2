// ESLint exception rule for NodeList

import React from "react"

import Map from "../map"
import Sample from "../sample"
import { Location } from "../types/custom_types"
import Form from "./Form"

function initMap(mapID: string): Map {
  return new Map(mapID)
}

function initSample(): Sample {
  const sample = new Sample()
  return sample
}

function start(): void {
  const sample = initSample()
  sample.jobs(1000).then(jobs => {
    const map = initMap("map-container")
    map.setLocations(jobs as Location[], true)
  })
}

const Pantheon: React.FunctionComponent = () => {
  start()
  return (
    <div>
      <Form></Form>
      <div id="map-container"></div>
    </div>
  )
}

export default Pantheon
