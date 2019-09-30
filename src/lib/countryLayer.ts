import GeoJSON from "ol/format/GeoJSON"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import { countryLayerStyle } from "../styles/countryStyle"
import { Map } from "ol"
import { log } from "./logger"
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
        log.warn("Callback started", callback)
        callback(selectedFeatures)
      }
    })
  })
}

export { onClick, countryLayer }
