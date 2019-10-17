import { GeoJSON } from "geojson"
export interface SelectedCountriesState {
  allCountries: GeoJSON[]
  selectedCountries: GeoJSON[]
}

export const ADD_COUNTRY = "ADD_COUNTRY"
export const ADD_SELECTED_COUNTRY = "ADD_SELECTED_COUNTRY"
export const REMOVE_SELECTED_COUNTRY = "REMOVE_SELECTED_COUNTRY"

export interface AddCountryAction {
  type: typeof ADD_COUNTRY
  payload: GeoJSON
}
export interface AddSelectedCountryAction {
  type: typeof ADD_SELECTED_COUNTRY
  payload: GeoJSON
}
export interface RemoveSelectedCountryAction {
  type: typeof REMOVE_SELECTED_COUNTRY
  payload: GeoJSON
}

export type SetSelectedCountriesActionTypes = AddSelectedCountryAction &
  AddCountryAction &
  RemoveSelectedCountryAction
