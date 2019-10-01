export interface SelectedCountriesState {
  selectedCountries: string[]
}

export const SET_SELECTED_COUNTRIES = "SET_SELECTED_COUNTRIES"

export interface SetSelectedCountriesAction {
  type: typeof SET_SELECTED_COUNTRIES
  payload: string[]
}

export type SetSelectedCountriesActionTypes = SetSelectedCountriesAction
