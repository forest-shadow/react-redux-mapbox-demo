import {FeatureCollection, MultiPolygon} from "geojson";

export interface IBoatRampsData extends FeatureCollection<MultiPolygon> {
  totalFeatures: number;
}