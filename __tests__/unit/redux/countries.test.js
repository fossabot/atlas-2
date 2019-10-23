import { addSelectedCountries } from "../../../src/redux/countries/actions"
import { ADD_SELECTED_COUNTRIES } from "../../../src/redux/countries/types"
import reducer from "../../../src/redux/countries/reducer"
describe("actions", () => {
  it("should create an action to add selected countries", () => {
    const countries = ["USA", "GER", "ITA"]
    const expectedAction = {
      type: ADD_SELECTED_COUNTRIES,
      payload: countries,
    }
    expect(addSelectedCountries(countries)).toEqual(expectedAction)
  })
})

describe("reducer", () => {
  const initialState = {
    allCountries: [],
    selectedCountries: [],
  }
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it("should handle ADD_SELECTED_COUNTRIES", () => {
    const countries = ["USA", "GER", "ITA"]
    expect(
      reducer(initialState, {
        type: ADD_SELECTED_COUNTRIES,
        payload: countries,
      }),
    ).toEqual({
      allCountries: [],
      selectedCountries: countries,
    })
  })
})
