const style = {
  streets: "chronark/ck2xjnsl41fvh1cozmgpnwbit/wmts",
}
export default {
  tiles:
    "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=" +
    process.env.MAPBOX_TOKEN,
  // style: "https://api.mapbox.com/styles/v1/chronark/ck2xbrca01g3r1cn7o7crfud5?access_token=" + process.env.MAPBOX_TOKEN,
  style: `https://api.mapbox.com/styles/v1/${style.streets}.wmts?access_token=${process.env.MAPBOX_TOKEN}`,
}
