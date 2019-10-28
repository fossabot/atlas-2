import { countryLayerStyle } from "../styles/countryStyle"
import Map from "./map"
import { toLonLat } from "ol/proj"
import Nominatim from "./nominatim"
import store from "../redux/store"
import {
  addSelectedCountries,
  addCountry,
  removeSelectedCountries,
} from "../redux/countries/actions"
import { Feature } from "ol"
import { GeoJSON } from "ol/format"
import { loadFeaturesXhr } from "ol/featureloader"

const convertGeoJsonToGeometries = (
  geojson: Record<string, any>,
): (Record<string, any> | undefined)[] => {
  const features = new GeoJSON({
    featureProjection: "EPSG:3857",
  }).readFeatures(geojson)
  return features.map(feature => feature.getGeometry())
}

const countryLayer = (map: Map): void => {
  const layerFilter = (layer: any): boolean => {
    return layer.get("name") === "countries"
  }

  const getCachedFeature = (pixel: number[]): Feature | undefined => {
    return map.olmap.forEachFeatureAtPixel(
      pixel,
      (feature: any) => {
        return feature
      },
      { layerFilter },
    )
  }

  map.olmap.on("singleclick", async (event: any) => {
    const cachedFeature = getCachedFeature(event.pixel)
    console.log(cachedFeature)
    if (cachedFeature) {
      console.log(cachedFeature.getGeometry() as Record<string, any>)
      store.dispatch(
        removeSelectedCountries([
          cachedFeature.getGeometry() as Record<string, any>,
        ]),
      )
    } else {
      const [lon, lat] = toLonLat(event.coordinate)
      const geojson = await new Nominatim().getCountryFromLatLon(lat, lon)
      if (geojson) {
        const geometries = convertGeoJsonToGeometries(geojson)
        if (geometries) {
          geometries.forEach(geometry => {
            if (geometry) {
              store.dispatch(addCountry(geometry))
              store.dispatch(addSelectedCountries([geometry]))
            }
          })
        }
      }
    }
  })
}

export { countryLayer }
