import MapBox from "../../src/lib/mapbox"

beforeEach(() => {
  jest.resetAllMocks()
})
describe("mapbox", () => {
  describe("setToken()", () => {
    describe("when a token is supplied", () => {
      describe("when the token is not empty", () => {
        test("should set the token correctly", () => {
          const mapbox = new MapBox()
          expect(mapbox.token).not.toEqual("TOKEN")
          mapbox.setToken("TOKEN")
          expect(mapbox.token).toEqual("TOKEN")
        })
      })
      describe("when the token is empty", () => {
        test("should throw an error", () => {
          const mapbox = new MapBox()
          expect(() => {
            mapbox.setToken("")
          }).toThrowErrorMatchingInlineSnapshot(`"The environmental variable 'MAPBOX_TOKEN' was empty"`)
        })
      })
    })
    describe("when MAPBOX_TOKEN is defined", () => {
      test("should load the token from .env correctly", () => {
        process.env.MAPBOX_TOKEN = "TOKEN"
        const mapbox = new MapBox()
        mapbox.setToken()
        expect(mapbox.token).toEqual("TOKEN")
      })
    })
    describe("when MAPBOX_TOKEN is not defined", () => {
      test("should throw an error", () => {
        process.env.MAPBOX_TOKEN = undefined
        const mapbox = new MapBox()
        expect(() => {
          mapbox.setToken()
        }).toThrowErrorMatchingInlineSnapshot(`"The environmental variable 'MAPBOX_TOKEN' was empty"`)
      })
    })
  })
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
        process.env.MAPBOX_TOKEN = "TOKEN"
        const mapbox = new MapBox()
        const result = mapbox.getStyleURL("USER/STYLE", "TOKEN")
        expect(result).toEqual("https://api.mapbox.com/styles/v1/USER/STYLE/wmts?access_token=TOKEN")
      })
    })
    describe("when style is supplied and default token is used", () => {
      test("should return the correct url", () => {
        process.env.MAPBOX_TOKEN = "TOKEN"
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
          console.log(mapbox.token)
          mapbox.getStyleURL()
        }).toThrowErrorMatchingInlineSnapshot(`"access token was empty"`)
      })
    })
    describe("when the style is empty", () => {
      test("should throw an error", () => {
        const mapbox = new MapBox()
        mapbox.setToken("TOKEN")
        mapbox.style = ""
        expect(() => {
          mapbox.getStyleURL()
        }).toThrowErrorMatchingInlineSnapshot(`"style name was empty"`)
      })
    })
  })
})
