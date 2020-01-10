/*
 * @module redux
 */
import { SET_ALL_JOBS, SET_SHOWN_JOBS, JobActionTypes, JobState } from "./types"

const initialState: JobState = {
  allJobs: [],
  shownJobs: [],
}

/**
 * @param state
 * @param action
 */
export default function(state = initialState, action: JobActionTypes): JobState {
  switch (action.type) {
    case SET_ALL_JOBS:
      return Object.assign({}, state, {
        allJobs: action.payload,
      })
    case SET_SHOWN_JOBS:
      return Object.assign({}, state, {
        shownJobs: action.payload,
      })
    default:
      return state
  }
}
