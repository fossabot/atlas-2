import { ILocation } from "./types/custom_types"

/**
 * Removes all entries in list1 from list2 and return list2.
 *
 * @export
 * @param list1
 * @param list2
 * @returns {array} The Difference list2 - list1
 */
export function removeFrom(list1: any[], list2: any[]) {
  for (const entry of list1) {
    if (includes(list2, entry)) {
      const pos: number = list2.indexOf(entry)
      list2.splice(pos, 1)
    }
  }
  return list2
}

/**
 * Return true if value is in container.
 * @param container an array of X
 * @param value X
 */
export function includes(container: ILocation[], value: ILocation): boolean {
  const pos = container.indexOf(value)
  if (pos >= 0) {
    return true
  }
  return false
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
