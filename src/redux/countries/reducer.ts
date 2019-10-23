import {
  CountriesActionTypes,
  CountriesState,
  ADD_SELECTED_COUNTRIES,
  REMOVE_SELECTED_COUNTRIES,
  ADD_COUNTRY,
} from "./types"
import { removeFrom } from "../../lib/util"

const initialState: CountriesState = {
  selectedCountries: [],
  allCountries: [],
}

export default function(
  state = initialState,
  action: CountriesActionTypes,
): CountriesState {
  switch (action.type) {
    case ADD_SELECTED_COUNTRIES:
      console.log(state)
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, ...action.payload],
      }
    case REMOVE_SELECTED_COUNTRIES:
      return {
        ...state,
        selectedCountries: removeFrom(state.selectedCountries, action.payload),
      }
    case ADD_COUNTRY:
      return {
        ...state,
        allCountries: [...state.allCountries, action.payload],
      }
    default:
      return state
  }
}
