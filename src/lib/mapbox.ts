export default {
  tiles:
    "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=" +
    process.env.MAPBOX_TOKEN,
  // style: "https://api.mapbox.com/styles/v1/chronark/ck2xbrca01g3r1cn7o7crfud5?access_token=" + process.env.MAPBOX_TOKEN,
  style: "https://api.mapbox.com/styles/v1/mapbox/dark-v10?access_token=" + process.env.MAPBOX_TOKEN,
}
