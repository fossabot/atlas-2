import { FETCH_JOBS, JobActionTypes, JobState } from "./types"

const initialState: JobState = {
  allJobs: [],
  shownJobs: [],
}

export default function(
  state = initialState,
  action: JobActionTypes,
): JobState {
  switch (action.type) {
    case FETCH_JOBS:
      return Object.assign({}, state, {
        allJobs: action.payload,
      })

    default:
      return state
  }
}
