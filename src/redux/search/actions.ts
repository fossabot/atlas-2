import { SET_SEARCH, SetSearchAction } from "./types"

export const setSearch = (search: string): SetSearchAction => {
  return { type: SET_SEARCH, payload: search }
}
