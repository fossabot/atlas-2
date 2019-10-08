import { setSelectedCountries } from "../../../src/redux/countries/actions"
import { SET_SELECTED_COUNTRIES } from "../../../src/redux/countries/types"
import reducer from "../../../src/redux/countries/reducer"
describe("actions", () => {
  it("should create an action to set selected countries", () => {
    const countries = ["USA", "GER", "ITA"]
    const expectedAction = {
      type: SET_SELECTED_COUNTRIES,
      payload: countries,
    }
    expect(setSelectedCountries(countries)).toEqual(expectedAction)
  })
})

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      selectedCountries: [],
    })
  })

  it("should handle ADD_SELECTED_COUNTRIES", () => {
    const countries = ["USA", "GER", "ITA"]
    expect(
      reducer([], {
        type: SET_SELECTED_COUNTRIES,
        payload: countries,
      }),
    ).toEqual({
      selectedCountries: countries,
    })
  })
})
