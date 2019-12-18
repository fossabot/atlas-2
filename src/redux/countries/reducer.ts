/*
 * @module redux
 */
import {
  CountriesActionTypes,
  CountriesState,
  ADD_SELECTED_COUNTRIES,
  REMOVE_SELECTED_COUNTRIES,
  ADD_COUNTRY,
} from "./types"
import { removeListFromList } from "../../lib/util"

const initialState: CountriesState = {
  selectedCountries: [],
  allCountries: [],
}

/**
 * @param state
 * @param action
 */
export default function(state = initialState, action: CountriesActionTypes): CountriesState {
  switch (action.type) {
    case ADD_SELECTED_COUNTRIES:
      return {
        ...state,
        selectedCountries: [...new Set([...state.selectedCountries, ...action.payload])],
      }
    case REMOVE_SELECTED_COUNTRIES:
      return {
        ...state,
        selectedCountries: removeListFromList(action.payload, state.selectedCountries),
      }
    case ADD_COUNTRY:
      return {
        ...state,
        allCountries: [...state.allCountries, action.payload],
      }
    default:
      return state
  }
}
