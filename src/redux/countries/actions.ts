import {
  AddSelectedCountriesAction,
  ADD_SELECTED_COUNTRIES,
  AddCountryAction,
  RemoveSelectedCountriesAction,
  REMOVE_SELECTED_COUNTRIES,
  ADD_COUNTRY,
} from "./types"

export const addSelectedCountries = (
  countries: Record<string, any>[],
): AddSelectedCountriesAction => {
  return { type: ADD_SELECTED_COUNTRIES, payload: countries }
}
export const addCountry = (country: Record<string, any>): AddCountryAction => {
  return { type: ADD_COUNTRY, payload: country }
}
export const removeSelectedCountries = (
  countries: Record<string, any>[],
): RemoveSelectedCountriesAction => {
  return { type: REMOVE_SELECTED_COUNTRIES, payload: countries }
}
