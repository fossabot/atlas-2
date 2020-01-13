import BaseLayer from "ol/layer/Layer"
import TileLayer from "ol/layer/Tile"
import OSM from "ol/source/OSM"

/**
 * Interface for both OSM and Mapbox layer generation.
 *
 * @interface TileLayerGenerator
 */
interface TileLayerGenerator {
  getLayer(): BaseLayer
}

/**
 *
 *
 */
export class OSMLayer implements TileLayerGenerator {
  /**
   * Creates a basic raster layer with tiles from osm.
   *
   * @returns A layer.
   */
  public getLayer(): BaseLayer {
    const layer = new TileLayer({
      source: new OSM(),
    })
    return layer
  }
}

// export class MapboxLayer implements TileLayerGenerator {}
