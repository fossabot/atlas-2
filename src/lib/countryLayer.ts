import GeoJSON from "ol/format/GeoJSON"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import { countryLayerStyle } from "../styles/countryStyle"
import { Map } from "ol"

export const getCountryCode = (country: any): string => {
  if (country.hasOwnProperty("id_")) {
    return country.id_
  }
  return ""
}

export const getCountryCodes = (countries: any[]): string[] => {
  const countryCodes = countries.map(getCountryCode)
  const uniqueCountryCodes = [...new Set(countryCodes)]

  // Remove a potential empty string in the array
  const index = uniqueCountryCodes.indexOf("")
  if (index >= 0) {
    uniqueCountryCodes.splice(index, 1)
  }

  return uniqueCountryCodes
}

const countryLayer = new VectorLayer({
  source: new VectorSource({
    url:
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json",
    format: new GeoJSON(),
  }),
  style: countryLayerStyle(false),
})

const onClick = (olmap: Map, callback?: (features: any[]) => void): void => {
  const selectedFeatures: any[] = []
  olmap.on("singleclick", e => {
    olmap.forEachFeatureAtPixel(e.pixel, (feature: any) => {
      const selectedIndex = selectedFeatures.indexOf(feature)

      if (selectedIndex < 0) {
        selectedFeatures.push(feature)
        feature.setStyle(countryLayerStyle(true))
      } else {
        selectedFeatures.splice(selectedIndex, 1)
        feature.setStyle(countryLayerStyle(false))
      }
      if (callback) {
        const countryCodes = getCountryCodes(selectedFeatures)
        callback(countryCodes)
      }
    })
  })
}

export { onClick, countryLayer }
