import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import Style from "ol/style/Style"

export const countryLayerStyle = (isSelected: boolean): Style => {
  return new Style({
    stroke: new Stroke({
      color: isSelected ? "rgba(200,20,20,0.8)" : "rgba(0,0,0,0)",
      width: isSelected ? 1 : 0,
    }),
    fill: new Fill({
      color: isSelected ? "rgba(200,20,20,0.1)" : "rgba(0,0,0,0)",
    }),
  })
}
