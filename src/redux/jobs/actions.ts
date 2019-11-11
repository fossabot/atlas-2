import Sample from "../../lib/sample"
import { SET_ALL_JOBS, SetShowJobsAction, SET_SHOWN_JOBS, SetAllJobsAction } from "./types"
import { Job } from "../../types/customTypes"

export const setShownJobs = (jobs: Job[]): SetShowJobsAction => {
  return { type: SET_SHOWN_JOBS, payload: jobs }
}

export const setAllJobs = (jobs: Job[]): SetAllJobsAction => {
  return { type: SET_ALL_JOBS, payload: jobs }
}
