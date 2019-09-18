import { combineReducers } from "redux"

import jobsReducer from "./jobs/reducer"
import notificationReducer from "./notifications/reducer"
import searchReducer from "./search/reducer"

const rootReducer = combineReducers({
  jobs: jobsReducer,
  notifications: notificationReducer,
  search: searchReducer,
})

export type State = ReturnType<typeof rootReducer>
export default rootReducer
