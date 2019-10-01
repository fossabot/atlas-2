import { SET_SELECTED_COUNTRIES, SetSelectedCountriesAction } from "./types"

export const setSelectedCountries = (
  countries: string[],
): SetSelectedCountriesAction => {
  return { type: SET_SELECTED_COUNTRIES, payload: countries }
}
