import { AnyAction, Dispatch } from "redux"

import { FETCH_USERS, NEW_USER } from "./actionTypes"

export function fetchUsers(): any {
  return function(dispatch: any): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users =>
        dispatch({
          type: FETCH_USERS,
          payload: users,
        }),
      )
  }
}
