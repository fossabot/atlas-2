import { combineReducers } from "redux"

import jobsReducer from "./jobs/reducer"
import notificationReducer from "./notifications/reducer"

const rootReducer = combineReducers({
  jobs: jobsReducer,
  notifications: notificationReducer,
})

export type State = ReturnType<typeof rootReducer>
export default rootReducer
