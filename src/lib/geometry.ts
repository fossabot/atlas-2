import { Job } from "../types/customTypes"
import GeoJSON from "ol/format/GeoJSON"
import { fromLonLat } from "ol/proj"
import { containsXY } from "ol/extent"
import Geometry from "ol/geom/Geometry"
import { log } from "./logger"

export const areCoordinatesInGeometry = (
  lonLat: [number, number],
  geometry: Record<string, any>,
  checkExtentFirst = true,
): boolean => {
  const coords = fromLonLat(lonLat)
  // Check the extent first to speed up the filtering.
  const isJobInExtent = checkExtentFirst
    ? containsXY(geometry.getExtent(), coords[0], coords[1])
    : true
  const result = isJobInExtent ? geometry.intersectsCoordinate(coords) : false
  return result
}

export const getJobsInGeometry = (
  jobs: Job[],
  geometry: Record<string, any>[],
): Job[] => {
  const startTime = new Date()

  let newShownJobs: Job[] = []
  geometry.forEach(geometryFeature => {
    if (geometryFeature) {
      const newJobs = jobs.filter(job => {
        return areCoordinatesInGeometry(
          [job.location.lon, job.location.lat],
          geometryFeature,
        )
      })
      newShownJobs = newShownJobs.concat(newJobs)
    }
  })
  const elapsedTime = Number(new Date()) - Number(startTime)
  log.debug(
    `Filtering through ${jobs.length} jobs in ${geometry.length} geojson features took ${elapsedTime} ms.`,
  )
  return newShownJobs
}
