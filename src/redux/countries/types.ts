export interface SelectedCountriesState {
  selectedCountries: any[]
}

export const SET_SELECTED_COUNTRIES = "SET_SELECTED_COUNTRIES"

export interface SetSelectedCountriesAction {
  type: typeof SET_SELECTED_COUNTRIES
  payload: any[]
}

export type SetSelectedCountriesActionTypes = SetSelectedCountriesAction
