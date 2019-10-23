import { GeoJSON } from "geojson"
export interface CountriesState {
  allCountries: GeoJSON[]
  selectedCountries: GeoJSON[]
}

export const ADD_COUNTRY = "ADD_COUNTRY"
export const ADD_SELECTED_COUNTRIES = "ADD_SELECTED_COUNTRIES"
export const REMOVE_SELECTED_COUNTRIES = "REMOVE_SELECTED_COUNTRIES"

export interface AddCountryAction {
  type: typeof ADD_COUNTRY
  payload: GeoJSON
}
export interface AddSelectedCountriesAction {
  type: typeof ADD_SELECTED_COUNTRIES
  payload: GeoJSON[]
}
export interface RemoveSelectedCountriesAction {
  type: typeof REMOVE_SELECTED_COUNTRIES
  payload: GeoJSON[]
}

export type CountriesActionTypes = AddSelectedCountriesAction &
  AddCountryAction &
  RemoveSelectedCountriesAction
