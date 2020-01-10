/*
 * @module redux
 */
export interface CountriesState {
  allCountries: Record<string, any>[]
  selectedCountries: Record<string, any>[]
}

export const ADD_COUNTRY = "ADD_COUNTRY"
export const ADD_SELECTED_COUNTRIES = "ADD_SELECTED_COUNTRIES"
export const REMOVE_SELECTED_COUNTRIES = "REMOVE_SELECTED_COUNTRIES"

export interface AddCountryAction {
  type: typeof ADD_COUNTRY
  payload: Record<string, any>
}
export interface AddSelectedCountriesAction {
  type: typeof ADD_SELECTED_COUNTRIES
  payload: Record<string, any>[]
}
export interface RemoveSelectedCountriesAction {
  type: typeof REMOVE_SELECTED_COUNTRIES
  payload: Record<string, any>[]
}

export type CountriesActionTypes = AddSelectedCountriesAction & AddCountryAction & RemoveSelectedCountriesAction
