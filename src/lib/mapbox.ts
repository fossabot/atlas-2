const serverURL = "http://jbs-osm.informatik.fh-nuernberg.de:52000"

export const mapbox = {
  tiles: serverURL + "/tiles?x={x}&y={y}&z={z}",
  style: serverURL + "/style",
}
