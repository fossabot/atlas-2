import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import MapClass from "../lib/map"
import Nominatim from "../lib/nominatim"
import { fetchJobs, setShownJobs } from "../redux/jobs/actions"
import { Job } from "../types/customTypes"
interface DispatchProps {
  fetchJobs: () => void
  setShownJobs: (jobs: Job[]) => void
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
    selectedCountries: Record<string, any>[]
  }
}

// interface OwnProps {}
type Props = StateProps & DispatchProps

const Map: React.FunctionComponent<Props> = props => {
  const MAP_ID = "map"
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
      const newMap = new MapClass(MAP_ID)
      newMap.addCountryLayer()
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

  useEffect(() => {
    console.log("Running")
    if (map) {
      map.featureLayerFromGeoJson(props.countries.selectedCountries)
    }
  }, [props.countries.selectedCountries])

  /*
    Fetching jobs
  */
  useEffect(() => {
    props.fetchJobs()

    return () => {}
  }, [])

  /*
    Updating redux jobs from country select
  */
  useEffect(() => {
    const jobs: Job[] = []

    props.setShownJobs(jobs)
  }, [props.countries.selectedCountries])

  /*
    Updating Jobs on map
  */
  useEffect(() => {
    // Check if map is defined yet, because this hook runs at init
    if (map) {
      map.setJobs(props.jobs.shownJobs)
    }
  }, [props.jobs.shownJobs])

  return <div id={MAP_ID}></div>
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map)
