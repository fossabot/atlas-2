import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { Map as OLMap } from "ol"
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
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isRendered, setIsRendered] = useState<boolean>(false)
  const [map, setMap] = useState()
  const [selectedCountries, setSelectedCountries] = useState<any[]>([])
  /*
    Render map
  */
  useEffect(() => {
    /*
     the state setter is running asynchronous, so there can be a racecondition 
    where 'isRendered' could be set before 'map'
    */
    const init = async (): Promise<void> => {
      const newMap = new MapClass("map")
      newMap.addCountryLayer((features: any[]) =>
        setSelectedCountries(features),
      )
      await setMap(newMap)
      setIsRendered(true)
    }
    init()
  }, [])

  useEffect(() => {
    log.info("selectedCountries", selectedCountries)
    log.info("length:", selectedCountries.length)
  })
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
