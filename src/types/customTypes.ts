export interface Elements {
  activeJobsCounter?: HTMLElement
  allJobsCounter?: HTMLElement
  corporationsCounter?: HTMLElement
  jobList?: HTMLElement
  jobTemplate?: HTMLTemplateElement
  locationSearchSubmit?: HTMLElement
  locationSearchText?: HTMLElement
}

export interface RawJob {
  datum: string
  extern: string
  firma: string
  ID: string
  lat: string
  lng: string
  logo: string
  titel: string
  typ: string
  url: string
}

export interface RawLocation {
  IDs: string
  jobs: number[]
  lat: string
  lng: string
  titel: string
  weight: number
}

export interface RawSearch {
  jobs: RawJob[]
  orte: RawLocation[]
}

export interface Location {
  country: string
  lat: number
  lon: number
}

export interface Job {
  corp: string
  location: Location
  date: string
  id: number
  logo: string
  score: number
  title: string
  type: string
  url: string
}

export type LogObject = Record<string, any> | number