const serverURL = "http://jbs-osm.informatik.fh-nuernberg.de"
const port = 52000

export const mapbox = {
  tiles:
    "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiY2hyb25hcmsiLCJhIjoiY2syeDdsN28yMDkyMTNqcG1nOTg1b2R2ZSJ9.FcG7FQhEkuBgB656DzLbCg",
  // serverURL + ":" + port + "/tiles?x={x}&y={y}&z={z}",
  style: "static/style.json",
}
