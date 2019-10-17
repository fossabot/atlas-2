import { GeoJSON } from "geojson"
import {
  AddSelectedCountryAction,
  ADD_SELECTED_COUNTRY,
  AddCountryAction,
  RemoveSelectedCountryAction,
  REMOVE_SELECTED_COUNTRY,
  ADD_COUNTRY,
} from "./types"

export const addSelectedCountry = (
  country: GeoJSON,
): AddSelectedCountryAction => {
  return { type: ADD_SELECTED_COUNTRY, payload: country }
}
export const addCountry = (country: GeoJSON): AddCountryAction => {
  return { type: ADD_COUNTRY, payload: country }
}
export const removeSelectedCountry = (
  country: GeoJSON,
): RemoveSelectedCountryAction => {
  return { type: REMOVE_SELECTED_COUNTRY, payload: country }
}
