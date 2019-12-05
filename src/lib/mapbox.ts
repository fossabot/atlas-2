const serverURL = "http://localhost:52000"

export const mapbox = {
  tiles: serverURL + "/tiles?x={x}&y={y}&z={z}",
  style: serverURL + "/style",
}
