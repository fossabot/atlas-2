import Proptypes from "prop-types"
import React, { useEffect } from "react"
import { connect } from "react-redux"

import MapClass from "../map"
import { fetchUsers } from "../redux/actions/userActions"
import Sample from "../sample"
import { Location } from "../types/custom_types"

interface MapProps {
  fetchUsers: () => void
  users?: any
}

const Map: React.FunctionComponent<MapProps> = props => {
  // Wrapping it in useEffect will only render it once and not on every update.
  useEffect(() => {
    const sample = new Sample()

    sample.jobs(1000).then(jobs => {
      const map = new MapClass("map")
      map.setLocations(jobs as Location[], true)
    })

    props.fetchUsers()
  }, [])

  return (
    <div>
      {// @ts-ignore
      props.users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
      <div id="map"></div>
    </div>
  )
}

Map.propTypes = {
  fetchUsers: Proptypes.func.isRequired,
  users: Proptypes.array.isRequired,
}

const mapStateToProps: any = (state: any) => ({
  users: state.users.items,
})

export default connect(
  mapStateToProps,
  { fetchUsers },
)(Map)
