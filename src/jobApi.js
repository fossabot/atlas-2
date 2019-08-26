import { IJob, IRawJob, IRawSearch } from "./types/custom_types"

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
  private getJobsByIds(ids: number[] = [], allJobs: IJob[]): IJob[] {
    const jobs: IJob[] = []
    allJobs.forEach((job: IJob) => {
      if (ids.includes(job.id)) {
        jobs.push(job)
      }
    })
    return jobs
  }

  /**
   * Clean the raw data and return a list with correct keys.
   * @param rawSearch
   */
  private clean(rawSearch: IRawSearch): IJob[] {
    const jobs: { [string]: mixed[] } = {
      jobs: [],
      locations: [],
    }
    rawSearch.orte.forEach((rawLocation: IRawLocation) => {
      jobs.locations.push({
        ids: rawLocation.IDs,
        jobs: rawLocation.jobs,
        lat: Number(rawLocation.lat),
        lon: Number(rawLocation.lng),
        title: rawLocation.titel,
        weight: rawLocation.weight,
      })
    })
    rawSearch.jobs.forEach((rawJob: IRawJob) => {
      jobs.jobs.push({
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
  get() {
    return this.search().then(rawSearch => {
      return this.clean(rawSearch)
    })
  }
}
