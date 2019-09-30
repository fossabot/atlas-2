import { SET_SELECTED_COUNTRIES, SetSelectedCountriesAction } from "./types"

export const setSelectedCountries = (
  countries: any[],
): SetSelectedCountriesAction => {
  return { type: SET_SELECTED_COUNTRIES, payload: countries }
}
