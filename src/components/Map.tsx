import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"

import { log } from "../lib/logger"
import MapClass from "../lib/map"
import Nominatim from "../lib/nominatim"
import { fetchJobs } from "../redux/jobs/actions"
import { Job } from "../redux/jobs/types"

interface DispatchProps {
  fetchJobs: () => void
}

interface StateProps {
  jobs: {
    allJobs: Job[]
  }
  search: {
    query: string
  }
}

// interface OwnProps {}
type Props = StateProps & DispatchProps

const Map: React.FunctionComponent<Props> = props => {
  const [isLoading, setLoading] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const [map, setMap] = useState()
  /*
    Render map
  */
  useEffect(() => {
    setMap(new MapClass("map"))
    setIsRendered(true)
  }, [])
  /*
    Fetching Nominatim data
  */

  useEffect(() => {
    const fetchNominatim = async (): Promise<void> => {
      if (props.search.query.length > 0) {
        const nominatim = new Nominatim()

        setLoading(true)
        const { result, success } = await nominatim.forwardSearch(
          props.search.query,
        )
        if (success && typeof result !== "undefined") {
          if (isRendered) {
            const layer = map.featureLayerFromGeoJson(result.geojson)
            map.zoomToLayer(layer)
          }
        }
        setLoading(false)
      }
    }
    fetchNominatim()
  }, [props.search.query])

  /*
    Fetching jobs
  */
  useEffect(() => {
    props.fetchJobs()

    return () => {}
  }, [])

  useEffect(() => {
    const locations = props.jobs.allJobs
    log.info("This is the map object", map)
    if (locations.length > 0) {
      log.debug("Settings locations", locations)
      map.setLocations(locations, true)
    } else {
      log.warn("There are no jobs to be displayed", locations)
    }
  }, [props.jobs, isRendered])

  return <div id="map"></div>
}
const mapStateToProps = (state: StateProps): StateProps => ({
  jobs: state.jobs,
  search: state.search,
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
