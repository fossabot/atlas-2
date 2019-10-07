import {
  SET_SELECTED_COUNTRIES,
  SetSelectedCountriesActionTypes,
  SelectedCountriesState,
} from "./types"

const initialState: SelectedCountriesState = {
  selectedCountries: [],
}

export default function(
  state = initialState,
  action: SetSelectedCountriesActionTypes,
): SelectedCountriesState {
  switch (action.type) {
    case SET_SELECTED_COUNTRIES:
      return {
        selectedCountries: action.payload,
      }
    default:
      return state
  }
}
