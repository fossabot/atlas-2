export function removeFrom(list: any[], entry: any): any[] {
  return list.filter(value => {
    return value !== entry
  })
}

export function removeListFromList(list1: any[], list2: any[]): any[] {
  const unique = [...new Set(list1)]
  return list2.filter(value => {
    return !unique.includes(value)
  })
}

export function strip(text: string): string {
  return text.replace(/^\s+|\s+$/g, "")
}

export function bound(lower: number, value: number, upper: number): number {
  return Math.max(lower, Math.min(value, upper))
}
