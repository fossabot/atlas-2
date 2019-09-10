import { FETCH_USERS, UserActionTypes, UserState } from "./types"

const initialState: UserState = {
  users: [],
}

export default function(
  state = initialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
