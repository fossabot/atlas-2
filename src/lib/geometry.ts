import { Job } from "../types/customTypes"
import GeoJSON from "ol/format/GeoJSON"
import { fromLonLat } from "ol/proj"
import { containsXY } from "ol/extent"
import Geometry from "ol/geom/Geometry"
import { log } from "./logger"

export const areCoordinatesInGeometry = (
  lonLat: [number, number],
  geometry: Geometry,
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

export const getJobsInGeoJson = (
  jobs: Job[],
  geojson: Record<string, any>[],
): Job[] => {
  const startTime = new Date()

  let newShownJobs: Job[] = []
  geojson.forEach(geojsonFeature => {
    const features = new GeoJSON({
      featureProjection: "EPSG:3857",
    }).readFeatures(geojsonFeature)

    features.forEach(feature => {
      const geometry = feature.getGeometry()
      if (geometry) {
        const newJobs = jobs.filter(job => {
          return areCoordinatesInGeometry(
            [job.location.lon, job.location.lat],
            geometry,
          )
        })
        newShownJobs = newShownJobs.concat(newJobs)
      }
    })
  })
  const elapsedTime = Number(new Date()) - Number(startTime)
  log.debug(
    `Filtering through ${jobs.length} jobs in ${geojson.length} geojson features took ${elapsedTime} ms.`,
  )
  return newShownJobs
}
