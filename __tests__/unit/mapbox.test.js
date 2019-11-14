import MapBox from "../../src/lib/mapbox"

beforeEach(() => {
  jest.resetAllMocks()
})
describe("mapbox", () => {
  describe("getTileURL()", () => {
    describe("when a token is supplied and the token is a string with length > 0", () => {
      test("should return the correct url", () => {
        const mapbox = new MapBox()
        const expectedURL =
          "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=RANDOMSTRING"
        const generatedURL = mapbox.getTileURL("RANDOMSTRING")
        expect(generatedURL).toEqual(expectedURL)
      })
    })
    describe("when no token is supplied", () => {
      test("should use the inernal token", () => {
        const mapbox = new MapBox()
        mapbox.token = "RANDOMSTRING"
        const expectedURL =
          "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=RANDOMSTRING"
        const generatedURL = mapbox.getTileURL()
        expect(generatedURL).toEqual(expectedURL)
      })
    })
    describe("when no token is supplied and the internal token is undefined", () => {
      test("should throw an error", () => {
        const mapbox = new MapBox()
        mapbox.token = undefined
        expect(() => {
          mapbox.getTileURL()
        }).toThrowErrorMatchingInlineSnapshot(`"access token was empty"`)
      })
    })
  })
  describe("getStyleURL()", () => {
    describe("when name and token is supplied", () => {
      test("should return correct url", () => {
        const mapbox = new MapBox()
        const result = mapbox.getStyleURL("USER/STYLE", "TOKEN")
        expect(result).toEqual("https://api.mapbox.com/styles/v1/USER/STYLE/wmts?access_token=TOKEN")
      })
    })
    describe("when style is supplied and default token is used", () => {
      test("should return the correct url", () => {
        const mapbox = new MapBox()
        mapbox.token = "TOKEN"
        expect(mapbox.getStyleURL("USER/STYLE")).toEqual(
          "https://api.mapbox.com/styles/v1/USER/STYLE/wmts?access_token=TOKEN",
        )
      })
    })

    describe("when no style and no token is supplied", () => {
      test("should return the url from default values", () => {
        const mapbox = new MapBox()
        mapbox.token = "TOKEN"
        mapbox.style = "USER/STYLE"
        expect(mapbox.getStyleURL()).toEqual("https://api.mapbox.com/styles/v1/USER/STYLE/wmts?access_token=TOKEN")
      })
    })
    describe("when the token is undefined", () => {
      test("should throw an error", () => {
        const mapbox = new MapBox()
        mapbox.token = undefined
        expect(() => {
          mapbox.getStyleURL()
        }).toThrowErrorMatchingInlineSnapshot(`"access token was empty"`)
      })
    })
    describe("when the style is empty", () => {
      test("should throw an error", () => {
        const mapbox = new MapBox()
        mapbox.style = ""
        expect(() => {
          mapbox.getTileURL()
        }).toThrowErrorMatchingInlineSnapshot(`"access token was empty"`)
      })
    })
  })
})
