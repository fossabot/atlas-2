import GeoJSON from "ol/format/GeoJSON"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import { countryLayerStyle } from "../styles/countryStyle"
import { Map } from "ol"
const countryLayer = new VectorLayer({
  source: new VectorSource({
    url: "data/countries.json",
    format: new GeoJSON(),
  }),
})

const onClick = (olmap: Map): any[] => {
  const selected: any[] = []
  olmap.on("singleclick", e => {
    olmap.forEachFeatureAtPixel(e.pixel, (feature: any) => {
      const selectedIndex = selected.indexOf(feature)
      if (selectedIndex < 0) {
        selected.push(feature)
        feature.setStyle(countryLayerStyle(true))
      } else {
        selected.splice(selectedIndex, 1)
        feature.setStyle(countryLayerStyle(false))
      }
    })
  })
  return selected
}

export { onClick, countryLayer }
