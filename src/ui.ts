// @flow
/* eslint-env browser */

import { log } from "./logger"
import Nominatim from "./nominatim"
import { IMap, IUI } from "./types/custom_interfaces"
import { IElements, ILocation } from "./types/custom_types"
import { OLFeature } from "./types/ol_types"
import { keyCount } from "./util"

/**
 * UI class for handling all non-map ui elements.
 *
 * @export
 * @class UI
 */
export default class UI implements IUI {
  private wantedElements: string[]
  private elements: IElements
  private map: IMap
  /**
   *Creates an instance of UI.
   * @memberof UI
   */
  private constructor(map: IMap) {
    this.map = map
    this.wantedElements = [
      "corporationsCounter",
      "allJobsCounter",
      "activeJobsCounter",
      "jobList",
      "jobTemplate",
      "locationSearchText",
      "locationSearchSubmit",
    ]
    this.elements = this.loadElements()
    this.addAddressSearch()
  }

  /**
   * @description Looks for all wanted elements in the dom.
   * @param [wantedElements=this.wantedElements]
   * @memberof UI
   */
  private loadElements(
    wantedElements: string[] = this.wantedElements,
  ): IElements {
    const elements = {}
    for (const id of wantedElements) {
      elements[id] = document.getElementById(id)
      log.debug(`Found element: ${id}`, { element: elements[id] })
    }
    return elements
  }

  /**
   * Update a known HTMLElement with new inner value.
   *
   * @param element The name of the element you want to update.
   * All elements are loaded in the constructor of this class.
   *
   * @memberof UI
   */
  private updateUI(element: string, inner: string): void {
    log.debug(`updated ${element}`, { inner })
    if (this.elements[element] instanceof HTMLElement) {
      this.elements[element].innerHTML = inner
    }
  }

  /**
   * Updating the corporation counter with a new number.
   *
   * @memberof UI
   */
  private updateCorporations(count: number): void {
    this.updateUI("corporationsCounter", count.toString())
  }

  /**
   * Updating the allJobs counter with a new number.
   *
   * @param {number} count
   * @memberof UI
   */
  updateAllJobs(count: number) {
    this.updateUI("allJobsCounter", count.toString())
  }

  /**
   * Updating the activeJobs counter with a new number.
   *
   * @param {number} count
   * @memberof UI
   */
  updateActiveJobs(count: number) {
    this.updateUI("activeJobsCounter", count.toString())
  }

  /**
   * Removes all elements from the jobList.
   *
   * @memberof UI
   */
  clearJobList() {
    const node = this.elements.jobList
    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  /**
   * Parses an array of locations and update the corporation and allJobs counter.
   *
   * @param {location} locations
   * @memberof UI
   */
  private updateFromLocations(locations: ILocation[]) {
    this.updateCorporations(keyCount(locations, "corp"))
    this.updateAllJobs(locations.length)
  }

  /**
   * @description Adds an eventlistener to the location search form.
   * @memberof UI
   */
  private addAddressSearch(): void {
    this.elements.locationSearchSubmit.addEventListener("click", () => {
      const element = document.getElementById("locationSearchText")
      // Type casting because a generic HTMLElement might not have a value attribute
      const address = (<HTMLInputElement>element).value

      const nominatim = new Nominatim()
      nominatim.forwardSearch(address).then((search: any) => {
        const geojson = search.geojson

        const layer = this.map.featureLayerFromGeoJson(geojson)
        this.map.zoomToLayer(layer)
      })
    })
  }
}
