import React, { useEffect } from "react"

import MapClass from "../map"
import Sample from "../sample"
import { Location } from "../types/custom_types"

const Map: React.FunctionComponent = () => {
  // Wrapping it in useEffect will only render it once and not on every update.
  useEffect(() => {
    const sample = new Sample()

    sample.jobs(1000).then(jobs => {
      const map = new MapClass("map")
      map.setLocations(jobs as Location[], true)
    })
  }, [])

  return <div id="map"></div>
}

export default Map
