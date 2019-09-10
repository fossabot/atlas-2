import { combineReducers } from "redux"

import userReducer from "../user/reducer"

const rootReducer = combineReducers({
  users: userReducer,
})

export type State = ReturnType<typeof rootReducer>
export default rootReducer
