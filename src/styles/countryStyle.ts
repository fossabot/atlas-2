import Fill from "ol/style/Fill"
import Stroke from "ol/style/Stroke"
import Style from "ol/style/Style"

export const countryLayerStyle = (isSelected: boolean): Style => {
  return new Style({
    stroke: new Stroke({
      color: isSelected ? "rgba(200,20,20,0.8)" : "gray",
      width: isSelected ? 2 : 1,
    }),
    fill: new Fill({
      color: isSelected ? "rgba(200,20,20,0.2)" : "rgba(20,20,20,0.9)",
    }),
  })
}
