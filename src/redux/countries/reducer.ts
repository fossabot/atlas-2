import {
  SetSelectedCountriesActionTypes,
  SelectedCountriesState,
  ADD_SELECTED_COUNTRY,
  REMOVE_SELECTED_COUNTRY,
  ADD_COUNTRY,
} from "./types"
import { removeFrom } from "../../lib/util"

const initialState: SelectedCountriesState = {
  selectedCountries: [],
  allCountries: [],
}

export default function(
  state = initialState,
  action: SetSelectedCountriesActionTypes,
): SelectedCountriesState {
  switch (action.type) {
    case ADD_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, action.payload],
      }
    case REMOVE_SELECTED_COUNTRY:
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
