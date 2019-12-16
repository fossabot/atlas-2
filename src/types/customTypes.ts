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

/**
 *
 *
 * @interface Location
 */
export interface Location {
  /**
   * Latitude of the location.
   */
  lat: number
  /**
   * Longitude of the location.
   */
  lon: number
}

export interface Job {
  corp: string
  locations: Location[]
  date: string
  id: number
  logo: string
  score: number
  title: string
  type: string
  url: string
}

export type LogObject = Record<string, any> | number

export interface GeocodingResponseObject {
  type: string
  query: string
  features: FeaturesEntity[]
  attribution: string
}
export interface FeaturesEntity {
  id: string
  type: string
  place_type?: string[]
  relevance: number
  properties: Properties
  text: string
  place_name: string
  bbox?: number[]
  center?: number[]
  geometry: Geometry
  context?: ContextEntity[]
  matching_text?: string
  matching_place_name?: string
}
export interface Properties {
  wikidata?: string
  accuracy?: string
  address?: string
  landmark?: boolean
  category?: string
}
export interface Geometry {
  type: string
  coordinates?: number[]
}
export interface ContextEntity {
  id: string
  wikidata?: string
  text: string
  short_code?: string
}
