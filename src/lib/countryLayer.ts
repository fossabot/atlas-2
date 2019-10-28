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
        store.dispatch(addCountry(geojson))
        store.dispatch(addSelectedCountries([geojson]))
      }
    }
  })
}

export { countryLayer }
