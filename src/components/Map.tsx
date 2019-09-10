import Proptypes from "prop-types"
import React, { useLayoutEffect } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import MapClass from "../map"
import { fetchUsers } from "../redux/user/actions"
import { User } from "../redux/user/types"
import Sample from "../sample"
import { Location } from "../types/custom_types"

interface DispatchProps {
  fetchUsers: () => void
}

interface StateProps {
  users: User[]
}
interface OwnProps {}
type Props = StateProps & DispatchProps

const Map: React.FunctionComponent<Props> = props => {
  // Wrapping it in useEffect will only render it once and not on every update.
  useLayoutEffect(() => {
    const sample = new Sample()

    sample.jobs(1000).then(jobs => {
      const map = new MapClass("map")
      map.setLocations(jobs as Location[], true)
    })
    props.fetchUsers()
  }, [])
  console.log(props.users)
  return (
    <div>
      <h1>HELLO {JSON.stringify(props.users)}</h1>
      {props.users.length > 0 &&
        props.users.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))}
      <div id="map"></div>
    </div>
  )
}

const mapStateToProps = (state: StateProps): StateProps => ({
  users: state.users,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map)
