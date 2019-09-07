// ESLint exception rule for NodeList

import React, { useState } from "react"

import Map from "../map"
import Sample from "../sample"
import { Location } from "../types/custom_types"
import Form from "./Form"
import Modal from "./Modal"

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
    const map = initMap("map")
    map.setLocations(jobs as Location[], true)
  })
}

const Pantheon: React.FunctionComponent = () => {
  let [isShowing, setShowing] = useState(true)

  const openModalHandler = (): void => {
    setShowing(true)
  }
  start()
  return (
    <div>
      <button
        onClick={openModalHandler}
        className="m-2 bg-grey-lighter flex-1 border-b-2 md:flex-none border-grey ml-2 hover:bg-grey-lightest text-grey-darkest font-bold py-4 px-6 rounded"
      >
        Open Modal
      </button>
      <div id="map"></div>
      {isShowing ? (
        <Modal show={isShowing} setShowing={setShowing}>
          <Form></Form>
        </Modal>
      ) : null}
    </div>
  )
}

export default Pantheon
