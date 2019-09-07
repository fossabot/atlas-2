// ESLint exception rule for NodeList

import React, { useState } from "react"

import Form from "./Form"
import Map from "./Map"
import Menu from "./Menu"
import Modal from "./Modal"

interface State {
  modal: { isShowing: boolean }
  isFullsceen: boolean
}

const Pantheon: React.FunctionComponent = () => {
  let [state, setState] = useState({
    modal: { isShowing: false },
    isFullscreen: false,
  })
  const toggleFullscreen = (): void => {
    setState(prevState => ({
      ...prevState,
      isFullscreen: !state.isFullscreen,
    }))
  }

  const toggleModal = (): void => {
    setState(prevState => ({
      ...prevState,
      modal: { isShowing: !state.modal.isShowing },
    }))
  }

  return (
    <div
      className={
        state.isFullscreen
          ? "transition-all fixed top-0 left-0 w-screen h-screen bg-white z-50"
          : "transition-all"
      }
    >
      <div>
        <Menu
          isFullscreen={state.isFullscreen}
          toggleModal={toggleModal}
          toggleFullscreen={toggleFullscreen}
        ></Menu>
        <Map></Map>
        {state.modal.isShowing ? (
          <Modal show={state.modal.isShowing} toggle={toggleModal}>
            <Form></Form>
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default Pantheon
