import { Job } from "../types/customTypes"
import GeoJSON from "ol/format/GeoJSON"
import { fromLonLat, toLonLat } from "ol/proj"
import { containsXY } from "ol/extent"
import { doesNotReject } from "assert"

export const countriesContain = (
  countries: Record<string, any>[],
  job: Job,
): boolean => {
  let doesContain = false
  countries.forEach(country => {
    const features = new GeoJSON({
      featureProjection: "EPSG:3857",
    }).readFeatures(country)

    if (features) {
      features.forEach(feature => {
        const geometry = feature.getGeometry()
        if (geometry) {
          const coords = fromLonLat([job.location.lon, job.location.lat])
          doesContain = containsXY(geometry.getExtent(), coords[0], coords[1])
          // geometry.intersectsCoordinate(coords),
        }
      })
    }
  })
  return doesContain
}
