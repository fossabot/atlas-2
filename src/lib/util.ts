import { Location } from "../types/customTypes"

export async function fetchJson(url: string): Promise<Record<string, any>> {
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  }
  const text = await response.text()
  throw new Error(text)
}

/**
 * Removes all occurences of an element from a list
 *
 * @export
 * @param {any[]} list
 * @param {*} entry
 * @returns {any[]}
 */
export function removeFrom(list: any[], entry: any): any[] {
  return list.filter(value => {
    return value !== entry
  })
}

/**
 * Removes all entries in list1 from list2 and return list2.
 *
 * @export
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
export function removeListFromList(list1: any[], list2: any[]): any[] {
  const unique = [...new Set(list2)]
  return list1.filter(value => {
    return !unique.includes(value)
  })
}

/**
 * Strips whitespace from start or end.
 *
 * @param text Input string
 */
export function strip(text: string): string {
  return text.replace(/^\s+|\s+$/g, "")
}

/**
 * @description Returns a number that is within lower and upper.
 * If value is outside of these boundaries, it will return the lower or upper value instead.
 * @export
 * @param {Number} lower
 * @param {number} value
 * @param {number} upper
 * @returns {number}
 */
export function bound(lower: number, value: number, upper: number): number {
  return Math.max(lower, Math.min(value, upper))
}

/**
 * @description Calculate how many unique companies are offering jobs.
 * @param {IJob[]} jobs
 * @returns {number}
 * @memberof Sample
 */
export function keyCount(arr: any[], key: string): number {
  const companies = []
  for (const entry of arr) {
    if (entry.hasOwnProperty(key)) {
      companies.push(entry[key])
    }
  }
  return [...new Set(companies)].length
}
