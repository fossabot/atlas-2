// @flow

import axios from "axios"

import { Job } from "../types/customTypes"
import { log } from "./logger"

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
    const response = await axios.get("../data/cities.json")
    const iso3 = await axios.get("../data/iso3.json")
    const cities = response.data
    const jobs = []
    while (jobs.length < count && cities.length > 0) {
      const i = Math.floor(Math.random() * cities.length)
      const city = cities.splice(i, 1)[0]
      jobs.push({
        id: i,
        corp: this.generateString(count / 4500),
        location: {
          country: iso3.data[city.country],
          lat: Number(city.lat),
          lon: Number(city.lon),
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
