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
    if (cachedFeature) {
      // if (
      //   store.getState().countries.selectedCountries.includes(cachedFeature)
      // ) {
      //   store.dispatch(removeSelectedCountries([cachedFeature]))
      // } else {
      //   store.dispatch(addSelectedCountries([cachedFeature]))
      // }
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
const onClick = (map: Map): void => {
  const selectedFeatures: any[] = []

  const layerFilter = (layer: any): boolean => {
    return layer.get("name") === "countries"
  }

  map.olmap.on("singleclick", e => {
    map.olmap.forEachFeatureAtPixel(
      e.pixel,
      (feature: any) => {
        const selectedIndex = selectedFeatures.indexOf(feature)

        if (selectedIndex < 0) {
          selectedFeatures.push(feature)
          feature.setStyle(countryLayerStyle({ isSelected: true }))
        } else {
          selectedFeatures.splice(selectedIndex, 1)
          feature.setStyle(countryLayerStyle({ isSelected: false }))
        }
      },
      { layerFilter },
    )
  })
}

export { onClick, countryLayer }
