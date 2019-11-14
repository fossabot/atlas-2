const styles = {
  streets: "chronark/ck2xjnsl41fvh1cozmgpnwbit",
}

export default class MapBox {
  private token: string | undefined
  private style: string
  public constructor() {
    this.token = process.env.MAPBOX_TOKEN
    this.style = styles.streets
  }

  public getTileURL(token = this.token): string {
    if (token && token.length > 0) {
      return "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=" + token
    } else {
      throw new Error("access token was empty")
    }
  }

  public getStyleURL(style = this.style, token = this.token): string {
    if (!token || token.length <= 0) {
      throw new Error("access token was empty")
    }
    if (style.length <= 0) {
      throw new Error("style name was empty")
    }
    return `https://api.mapbox.com/styles/v1/${style}/wmts?access_token=${token}`
  }
}
