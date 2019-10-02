import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"

import Sample from "../../lib/sample"
import { FETCH_JOBS, FetchJobsAction, Job } from "./types"

export const set = (jobs: Job[]): FetchJobsAction => {
  return { type: FETCH_JOBS, payload: jobs }
}

export const fetchJobs = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>(resolve => {
      new Sample().jobs(200).then(jobs => dispatch(set(jobs)))
      resolve()
    })
  }
}
