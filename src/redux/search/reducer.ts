import { SET_SEARCH, SearchActionTypes, SearchState } from "./types"

const initialState: SearchState = {
  query: "",
}

/**
 * @param state
 * @param action
 */
export default function(state = initialState, action: SearchActionTypes): SearchState {
  switch (action.type) {
    case SET_SEARCH:
      return {
        query: action.payload,
      }
    default:
      return state
  }
}
