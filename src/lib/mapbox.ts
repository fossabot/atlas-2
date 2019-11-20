const styles = {
  streets: "chronark/ck2xjnsl41fvh1cozmgpnwbit",
}

export default class MapBox {
  private token: string
  private style: string
  public constructor() {
    this.style = styles.streets
    this.setToken()
  }

  public setToken(token?: string): void {
    if (typeof token !== "undefined") {
      if (token.length > 0) {
        this.token = token
      } else {
        throw new Error("Token was an empty string")
      }
    } else {
      if (process.env.MAPBOX_TOKEN && process.env.MAPBOX_TOKEN.length > 0 && process.env.MAPBOX_TOKEN !== "undefined") {
        this.token = process.env.MAPBOX_TOKEN
      } else {
        throw new Error("The environmental variable 'MAPBOX_TOKEN' was empty")
      }
    }
  }

  public getTileURL(token = this.token): string {
    if (typeof token === "undefined" || token.length <= 0) {
      throw new Error("access token was empty")
    }
    return "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=" + token
  }

  public getStyleURL(style = this.style, token = this.token): string {
    if (typeof token === "undefined" || token.length <= 0) {
      throw new Error("access token was empty")
    }
    if (!style || style.length <= 0) {
      throw new Error("style name was empty")
    }
    return `https://api.mapbox.com/styles/v1/${style}?access_token=${token}`
  }
}
