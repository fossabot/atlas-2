import MapBox from "../../src/lib/mapbox"

beforeEach(() => {
  jest.resetAllMocks()
})
describe("mapbox", () => {
  describe("getStyleURL()", () => {})
  describe("buildTileURL()", () => {
    describe("when a token is supplied", () => {
      test("should return the correct url", () => {
        const mapbox = new MapBox()
        const token = "RANDOMSTRING"
        const expectedURL =
          "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=" + token
        const generatedURL = mapbox.buildTileURL(token)
        expect(generatedURL).toEqual(expectedURL)
      })
    })
    describe("when no token is supplied", () => {
      test("should throw an error", () => {
        const mapbox = new MapBox()

        expect(() => {
          mapbox.buildTileURL("")
        }).toThrowErrorMatchingInlineSnapshot(`"access token was empty"`)
      })
    })
  })
  describe("getTileURL()", () => {
    describe("if a token exists", () => {
      const mapbox = new MapBox()
      const mockBuildTileURL = jest.spyOn(mapbox, "buildTileURL").mockImplementationOnce(TOKEN => TOKEN)
      mapbox.token = "TOKEN"
      test("should call mapbox.buildTileURL correctly", () => {
        mapbox.getTileURL()
        expect(mockBuildTileURL).toHaveBeenCalledTimes(1)
        expect(mockBuildTileURL).toHaveBeenCalledWith("TOKEN")
      })
    })
    describe("if token is undefined", () => {
      const mapbox = new MapBox()

      const mockBuildTileURL = jest.spyOn(mapbox, "buildTileURL").mockImplementationOnce(TOKEN => TOKEN)

      mapbox.token = undefined
      test("should call mapbox.buildTileURL with empty string", () => {
        mapbox.getTileURL()
        expect(mockBuildTileURL).toHaveBeenCalledTimes(1)
        expect(mockBuildTileURL).toHaveBeenCalledWith("")
      })
    })
  })
})

// https://api.mapbox.com/styles/v1/chronark/ck2xjnsl41fvh1cozmgpnwbit/wmts?access_token=sk.eyJ1IjoiY2hyb25hcmsiLCJhIjoiY2syeHRjOHF1MDB3NTNtcGRnNmpvMW42cCJ9.SZW8it26rZNV71TRKaiQmA
