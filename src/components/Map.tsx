import React, { useEffect } from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"

import MapClass from "../map"
import { fetchJobs } from "../redux/jobs/actions"
import { Job } from "../redux/jobs/types"

interface DispatchProps {
  fetchJobs: () => void
}

interface StateProps {
  jobs: {
    allJobs: Job[]
  }
}
//interface OwnProps {}
type Props = StateProps & DispatchProps

const Map: React.FunctionComponent<Props> = props => {
  // Wrapping it in useEffect will only render it once and not on every update.
  useEffect(() => {
    props.fetchJobs()
  }, [])
  useEffect(() => {
    const map = new MapClass("map")
    map.setLocations(props.jobs.allJobs, true)
  }, [props.jobs])
  return (
    <div>
      <div id="map"></div>
    </div>
  )
}

const mapStateToProps = (state: StateProps): StateProps => ({
  jobs: state.jobs,
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
): DispatchProps => ({
  fetchJobs: () => dispatch(fetchJobs()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map)
