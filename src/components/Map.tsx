import React from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"

import MapClass from "../map"
import { fetchJobs } from "../redux/jobs/actions"
import { Job } from "../redux/jobs/types"
import { MapInterface } from "../types/custom_interfaces"

interface DispatchProps {
  fetchJobs: () => void
}

interface StateProps {
  jobs: {
    allJobs: Job[]
  }
}
// interface OwnProps {}
type Props = StateProps & DispatchProps

class Map extends React.Component<Props, {}> {
  public map: MapInterface
  public componentDidMount(): void {
    this.props.fetchJobs()
    this.map = new MapClass("map")
  }

  public componentDidUpdate(): void {
    this.map.setLocations(this.props.jobs.allJobs, true)
  }

  public render(): React.ReactNode {
    return <div id="map"></div>
  }
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
