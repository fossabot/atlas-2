import { fromLonLat } from "ol/proj"
import { containsXY } from "ol/extent"

export const areCoordinatesInGeometry = (
  lonLat: [number, number],
  geometry: Record<string, any>,
  checkExtentFirst = true,
): boolean => {
  const coords = fromLonLat(lonLat)
  // Check the extent first to speed up the filtering.
  const isJobInExtent = checkExtentFirst ? containsXY(geometry.getExtent(), coords[0], coords[1]) : true
  const result = isJobInExtent ? geometry.intersectsCoordinate(coords) : false
  return result
}
