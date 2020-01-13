/**
 *
 */
import Map from "./map"
import { toLonLat } from "ol/proj"
import Nominatim from "./apis/nominatim"
import store from "../redux/store"
import { addSelectedCountries, addCountry, removeSelectedCountries } from "../redux/countries/actions"
import { GeoJSON } from "ol/format"
import { areCoordinatesInGeometry } from "./geometryFilter"

const convertGeoJsonToGeometries = (geojson: Record<string, any>): (Record<string, any> | undefined)[] => {
  const features = new GeoJSON({
    featureProjection: "EPSG:3857",
  }).readFeatures(geojson)
  return features.map(feature => feature.getGeometry())
}
const getCachedGeometry = (event: any): Record<string, any> => {
  const [lon, lat] = toLonLat(event.coordinate)
  const matches = store.getState().countries.allCountries.filter(geometry => {
    return areCoordinatesInGeometry([lon, lat], geometry)
  })
  return matches[0]
}

const countryLayer = (map: Map): void => {
  map.olmap.on("singleclick", async (event: any) => {
    const cachedGeometry = getCachedGeometry(event)
    if (cachedGeometry) {
      store.getState().countries.selectedCountries.includes(cachedGeometry)
        ? store.dispatch(removeSelectedCountries([cachedGeometry]))
        : store.dispatch(addSelectedCountries([cachedGeometry]))
    } else {
      const [lon, lat] = toLonLat(event.coordinate)
      const geojson = await new Nominatim().reverse(lon, lat)
      if (geojson) {
        const geometries = convertGeoJsonToGeometries(geojson)
        if (geometries) {
          geometries.forEach(geometry => {
            if (geometry) {
              if (!store.getState().countries.allCountries.includes(geometry)) {
                store.dispatch(addCountry(geometry))
              }
              store.dispatch(addSelectedCountries([geometry]))
            }
          })
        }
      }
    }
  })
}

export { countryLayer }
