import { Job } from "../types/customTypes"
import GeoJSON from "ol/format/GeoJSON"
import { fromLonLat } from "ol/proj"
import { containsXY } from "ol/extent"
import Geometry from "ol/geom/Geometry"
import { log } from "./logger"

export const isJobInGeometry = (
  job: Job,
  geometry: Geometry,
  checkExtentFirst = true,
): boolean => {
  const coords = fromLonLat([job.location.lon, job.location.lat])
  // Check the extent first to speed up the filtering.
  const isJopInExtent = checkExtentFirst
    ? containsXY(geometry.getExtent(), coords[0], coords[1])
    : true
  return isJopInExtent ? geometry.intersectsCoordinate(coords) : false
}

export const getJobsInCountries = (
  jobs: Job[],
  countries: Record<string, any>[],
): Job[] => {
  const startTime = new Date()

  let newShownJobs: Job[] = []
  countries.forEach(country => {
    const features = new GeoJSON({
      featureProjection: "EPSG:3857",
    }).readFeatures(country)

    features.forEach(feature => {
      const geometry = feature.getGeometry()
      if (geometry) {
        const newJobs = jobs.filter(job => {
          return isJobInGeometry(job, geometry)
        })
        newShownJobs = newShownJobs.concat(newJobs)
      }
    })
  })
  const elapsedTime = Number(new Date()) - Number(startTime)
  log.info(
    `Filtering through ${jobs.length} jobs in ${countries.length} countries took ${elapsedTime} ms.`,
  )
  return newShownJobs
}
