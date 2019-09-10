import { FETCH_JOBS, JobActionTypes, JobState } from "./types"

const initialState: JobState = {
  allJobs: [],
}

export default function(
  state = initialState,
  action: JobActionTypes,
): JobState {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        allJobs: action.payload,
      }
    default:
      return state
  }
}
