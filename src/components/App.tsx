// ESLint exception rule for NodeList

import React, { useState } from "react"
import { connect } from "react-redux"

import { Job } from "../redux/jobs/types"
import { addNotification } from "../redux/notifications/actions"
import { NotificationActionTypes } from "../redux/notifications/types"
import Form from "./Form"
import Map from "./Map"
import Menu from "./Menu"
import Modal from "./Modal"
import Notifications from "./Notifications"

interface State {
  modal: { isShowing: boolean }
  isFullsceen: boolean
}

interface DispatchProps {
  addNotification: (level: string, content: string) => NotificationActionTypes
}
interface StateProps {
  jobs: Job[]
}

type Props = DispatchProps & StateProps

const App: React.FunctionComponent<Props> = props => {
  const [state, setState] = useState({
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

  function notify(): void {
    props.addNotification("INFO", "Hello, World!")
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
        <button onClick={notify}>Dispatch</button>
        <Notifications></Notifications>
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

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  addNotification: (level: string, content: string) =>
    dispatch(addNotification(level, content)),
})

const mapStateToProps = (state: StateProps): StateProps => ({
  jobs: state.jobs,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
