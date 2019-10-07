import { Job } from "../types/customTypes"
import { log } from "./logger"
import { fetchJson } from "./util"

/**
 * Random sample generator
 *
 * Use this if you need testing data.
 */
export default class Sample {
  /**
   * @description
   * @param {number} count
   * @returns {Promise<IJob[]>}
   * @memberof Sample
   */
  public async jobs(count: number): Promise<Job[]> {
    const startTime = new Date()
    // TODO selfhost these files
    const [cities, iso3] = await Promise.all([
      fetchJson(
        "https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json",
      ),
      fetchJson(
        "https://gist.githubusercontent.com/chronark/53ffb75636c27ef2ab194b9086abb01b/raw/eeb63680b0a94b0376ebf4bed5a45ec87dfbbbb4/iso3.json",
      ),
    ])

    const jobs = []
    while (jobs.length < count && cities.length > 0) {
      const i = Math.floor(Math.random() * cities.length)
      const city = cities.splice(i, 1)[0]
      jobs.push({
        id: i,
        corp: this.generateString(count / 4500),
        location: {
          country: iso3[city.country],
          lat: Number(city.lat),
          lon: Number(city.lng),
        },
        date: "",
        logo: "",
        score: Math.random(),
        title: "",
        type: "",
        url: "fake.domain.com",
      })
    }
    const elapsedTime = Number(new Date()) - Number(startTime)
    log.info(`Generating ${jobs.length} jobs took ${elapsedTime} ms.`)
    return jobs
  }

  /**
   * @description Generate a random string.
   * @param {number} [length=4]
   * @returns
   * @memberof Sample
   */
  private generateString(length = 4): string {
    let result = ""
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }
}
