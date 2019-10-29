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
  const unique = [...new Set(list1)]
  return list2.filter(value => {
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
