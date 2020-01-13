/*
 * @module redux
 */
import { Job } from "../../types/customTypes"

export interface JobState {
  allJobs: Job[]
  shownJobs: Job[]
}

export const SET_ALL_JOBS = "SET_ALL_JOBS"
export const SET_SHOWN_JOBS = "SET_SHOWN_JOBS"

export interface SetAllJobsAction {
  type: typeof SET_ALL_JOBS
  payload: Job[]
}

export interface SetShowJobsAction {
  type: typeof SET_SHOWN_JOBS
  payload: Job[]
}

export type JobActionTypes = SetAllJobsAction | SetShowJobsAction
