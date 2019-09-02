import axios from "axios"

import { Job, RawJob, RawSearch } from "./types/custom_types"

/**
 * Class to gather jobs from the api.
 */
export default class Jobs {
  private url: string
  /**
   *Creates an instance of Jobs.
   * @memberof Jobs
   */
  private constructor() {
    this.url = "https://jobboerse.th-nuernberg.de/srv.php/Suche"
  }

  /**
   * Return a subset of allJobs defined by ids
   * @param ids
   * @param allJobs
   */
  private getJobsByIds(ids: number[] = [], allJobs: Job[]): Job[] {
    const jobs: Job[] = []
    allJobs.forEach((job: Job) => {
      if (ids.includes(job.id)) {
        jobs.push(job)
      }
    })
    return jobs
  }

  /**
   * Axios call to the jobs api to retrieve all available jobs.
   *
   * @private
   * @returns {Promise<RawSearch>}
   * @memberof Jobs
   */
  private search(): Promise<RawSearch> {
    // TODO rewrite this to use the actual url.
    // CORS must be enabled
    return axios.get("../data/search.json")
  }

  /**
   * Clean the raw data and return a list with correct keys.
   * @param rawSearch
   */
  private clean(rawSearch: RawSearch): Job[] {
    const jobs: Job[] = []

    rawSearch.jobs.forEach((rawJob: RawJob) => {
      jobs.push({
        corp: rawJob.firma,
        date: rawJob.datum,
        id: Number(rawJob.ID),
        lat: Number(rawJob.lat),
        logo: rawJob.logo,
        lon: Number(rawJob.lng),
        title: rawJob.titel,
        type: rawJob.typ,
        url: rawJob.url,
      })
    })
    return jobs
  }

  /**
   * Return a cleaned array of jobs.
   */
  private async get(): Promise<Job[]> {
    const rawSearch = await this.search()
    return this.clean(rawSearch)
  }
}
