import {FeatureCollection, MultiPolygon, Point} from "geojson";

export interface IBoatRampsData extends FeatureCollection<MultiPolygon> {
  totalFeatures: number;
}

export interface IRampPointsData extends FeatureCollection<Point> {}

export enum BOAT_RAMP_FILTER_NAME {
  MATERIAL = 'material',
  AREA = 'area_'
}

export interface IBoatRampsFilterConfig {
  value: string;
  name: BOAT_RAMP_FILTER_NAME;
  range?: number[]
}