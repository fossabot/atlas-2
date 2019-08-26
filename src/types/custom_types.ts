export interface Location {
  title: string
  corp: string
  type: string
  logo: string
  url: string
  score: number
  lat: number
  lon: number
  date: string
}

export interface Elements {
  corporationsCounter: HTMLElement
  allJobsCounter: HTMLElement
  activeJobsCounter: HTMLElement
  jobList: HTMLElement
  jobTemplate: HTMLTemplateElement
  locationSearchText: HTMLElement
  locationSearchSubmit: HTMLElement
}

export interface RawJob {
  ID: string
  datum: string
  titel: string
  lat: string
  lng: string
  typ: string
  extern: string
  logo: string
  firma: string
  url: string
}

export interface RawLocation {
  IDs: string
  lat: string
  lng: string
  titel: string
  jobs: number[]
  weight: number
}

export interface RawSearch {
  orte: RawLocation[]
  jobs: RawJob[]
}

export interface Job {
  id: number
  lon: number
  lat: number
  score: number
  title: string
  date: string
  type: string
  logo: string
  url: string
  corp: string
}

export interface LogObject {
  [key: string]: any
}
