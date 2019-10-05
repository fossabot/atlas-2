import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { log } from "../lib/logger"
import MapClass from "../lib/map"
import Nominatim from "../lib/nominatim"
import { fetchJobs, setShownJobs } from "../redux/jobs/actions"
import { Job } from "../redux/jobs/types"
import { setSelectedCountries } from "../redux/countries/actions"

interface DispatchProps {
  fetchJobs: () => void
  setShownJobs: (jobs: Job[]) => void
  setSelectedCountries: (countries: string[]) => void
}

interface StateProps {
  jobs: {
    allJobs: Job[]
    shownJobs: Job[]
  }
  search: {
    query: string
  }
  countries: {
    selectedCountries: string[]
  }
}

// interface OwnProps {}
type Props = StateProps & DispatchProps

const Map: React.FunctionComponent<Props> = props => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isRendered, setIsRendered] = useState<boolean>(false)
  const [map, setMap] = useState()
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
      newMap.addCountryLayer((features: any[]) => {
        props.setSelectedCountries(features)
      })
      await setMap(newMap)
      setIsRendered(true)
    }
    init()
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

  /*
    Locations
  */
  useEffect(() => {
    let locations: Job[] = []
    if (props.countries.selectedCountries.length > 0) {
      locations = props.jobs.allJobs.filter(job => {
        return props.countries.selectedCountries.includes(job.country)
      })
    } else {
      locations = props.jobs.allJobs
    }
    // Check if map is defined yet, because this hook runs at init
    if (map) {
      map.setLocations(locations)
    }
    props.setShownJobs(locations)
  }, [props.jobs.allJobs, isRendered, props.countries.selectedCountries])

  return <div id="map"></div>
}

const mapStateToProps = (state: StateProps): StateProps => ({
  jobs: state.jobs,
  search: state.search,
  countries: state.countries,
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
): DispatchProps => ({
  fetchJobs: () => dispatch(fetchJobs()),
  setShownJobs: (jobs: Job[]) => dispatch(setShownJobs(jobs)),
  setSelectedCountries: (countries: string[]) =>
    dispatch(setSelectedCountries(countries)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map)
