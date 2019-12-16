/**
 * Remove an item from a list.
 *
 * @export
 * @param list
 * @param entry
 * @returns
 */
export function removeFrom(list: any[], entry: any): any[] {
  return list.filter(value => {
    return value !== entry
  })
}

/**
 * Remove every item in list1 from list2.
 *
 * @export
 * @param list1
 * @param list2
 * @returns
 */
export function removeListFromList(list1: any[], list2: any[]): any[] {
  const unique = [...new Set(list1)]
  return list2.filter(value => {
    return !unique.includes(value)
  })
}

/**
 * Return value if it is between lower and upper, otherwise return the boundary value.
 *
 * @category Utility
 */
export function bound(lower: number, value: number, upper: number): number {
  return Math.max(lower, Math.min(value, upper))
}
