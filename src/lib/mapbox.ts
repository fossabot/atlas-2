const styles = {
  streets: "chronark/ck2xjnsl41fvh1cozmgpnwbit",
}

export default class MapBox {
  private token: string | undefined
  public constructor() {
    this.token = process.env.MAPBOX_TOKEN
  }

  public getTileURL(): string {
    return this.buildTileURL(this.token ? this.token : "")
  }

  private buildTileURL(token: string): string {
    if (token.length > 0) {
      return "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=" + token
    } else {
      throw new Error("access token was empty")
    }
  }
}

const x = {
  tiles: process.env.MAPBOX_TOKEN,
  // style: "https://api.mapbox.com/styles/v1/chronark/ck2xbrca01g3r1cn7o7crfud5?access_token=" + process.env.MAPBOX_TOKEN,
  style: `https://api.mapbox.com/styles/v1/${styles.streets}/wmts?access_token=${process.env.MAPBOX_TOKEN}`,
}
