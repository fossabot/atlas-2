import { Job } from "../types/customTypes"
import { log } from "./logger"
import axios from "axios"
import CircleStyle from "ol/style/Circle"

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

  private getLocations(cities: Record<string, any>[], locationCount: number): { lat: number; lon: number }[] {
    const locations: { lat: number; lon: number }[] = []
    for (let l = 0; l < locationCount; l++) {
      const i = Math.floor(Math.random() * cities.length)
      locations.push({
        lat: Number(cities[i].lat),
        lon: Number(cities[i].lng),
      })
    }
    return locations
  }

  public async jobs(count: number): Promise<Job[]> {
    const startTime = new Date()
    // TODO selfhost these files
    const cities = await axios
      .get("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json")
      .then(response => response.data)

    const jobs: Job[] = []
    let i = 0
    while (jobs.length < count && cities.length > 0) {
      jobs.push({
        id: i++,
        corp: this.generateString(count / 4500),
        locations: this.getLocations(cities, Math.exp(Math.random() * 1.2)),
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
