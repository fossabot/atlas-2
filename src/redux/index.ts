import { combineReducers } from "redux"

import jobsReducer from "./jobs/reducer"

const rootReducer = combineReducers({
  jobs: jobsReducer,
})

export type State = ReturnType<typeof rootReducer>
export default rootReducer
