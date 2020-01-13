import { Job } from "../types/customTypes"
import { fromLonLat } from "ol/proj"
import { containsXY } from "ol/extent"

export const areCoordinatesInGeometry = (
  lonLat: [number, number],
  geometry: Record<string, any>,
  checkExtentFirst = true,
): boolean => {
  const coords = fromLonLat(lonLat)
  // Check the extent first to speed up the filtering.
  const isJobInExtent = checkExtentFirst ? containsXY(geometry.getExtent(), coords[0], coords[1]) : true
  const result = isJobInExtent ? geometry.intersectsCoordinate(coords) : false
  return result
}

const getJobsInGeometry = (jobs: Job[], geometry: Record<string, any>[]): Job[] => {
  let newShownJobs: Job[] = []
  geometry.forEach(geometryFeature => {
    if (geometryFeature) {
      const newJobs = jobs.filter(job => {
        const locationsInsideGeometry = job.locations.filter(location => {
          return areCoordinatesInGeometry([location.lon, location.lat], geometryFeature)
        })
        if (locationsInsideGeometry.length > 0) {
          job.locations = locationsInsideGeometry
          return true
        }
        return false
      })
      newShownJobs = newShownJobs.concat(newJobs)
    }
  })
  return newShownJobs
}

const filterJobsByGeometry = (jobs: Job[], geometry: Record<string, any>[]): Job[] => {
  if (geometry.length === 0) {
    return jobs
  } else {
    return getJobsInGeometry(jobs, geometry)
  }
}
export const filterJobs = (
  jobs: Job[],
  filter: { countries?: Record<string, any>[]; circle?: Record<string, any> },
): Job[] => {
  if (filter.circle) {
    jobs = filterJobsByGeometry(jobs, [filter.circle])
  }
  if (filter.countries) {
    jobs = filterJobsByGeometry(jobs, filter.countries)
  }
  return jobs
}
