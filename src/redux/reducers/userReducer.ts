import { FETCH_USERS, NEW_USER } from "../actions/actionTypes"

const initialState = {
  items: [],
  item: {},
}

export default function(state = initialState, action: any): any {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}
