import { getCountryCode, getCountryCodes } from "../../src/lib/countryLayer"

describe("countryLayer.ts", () => {
  describe.skip("getCountryCode()", () => {
    describe("if country has an id", () => {
      test("should return the correct code", () => {
        const country = {
          id_: "SOME_ID",
        }
        expect(getCountryCode(country)).toEqual("SOME_ID")
      })
    })
    describe("if country does not have an id", () => {
      test("should return empty string", () => {
        const country = {
          otherKey: "SOME_KEY",
        }
        const expected = ""
        expect(getCountryCode(country)).toEqual(expected)
      })
    })
  })

  describe.skip("getCountryCodes()", () => {
    describe("if countries is an empty list", () => {
      test("should return an empty array", () => {
        const countries = []
        expect(getCountryCodes(countries)).toEqual([])
      })
    })
    describe("if all countries have valid ids", () => {
      test("should return the correct ids", () => {
        const countries = [
          {
            id_: "GER",
          },
          {
            id_: "RUS",
          },
          {
            id_: "USA",
          },
        ]
        const expected = ["GER", "RUS", "USA"]
        expect(getCountryCodes(countries)).toEqual(expected)
      })
    })
    describe("if not all countries have valid ids", () => {
      test("should return the correct ids and omit countries without one", () => {
        const countries = [
          {},
          {
            id_: "RUS",
          },
          {
            id_: "USA",
          },
        ]
        const expected = ["RUS", "USA"]
        expect(getCountryCodes(countries)).toEqual(expected)
      })
    })
    describe("if a country exists more than once", () => {
      test("should return a unique set of the correct ids ", () => {
        const countries = [
          {
            id_: "RUS",
          },
          {
            id_: "RUS",
          },
          {
            id_: "USA",
          },
        ]
        const expected = ["RUS", "USA"]
        expect(getCountryCodes(countries)).toEqual(expected)
      })
    })
  })
})
