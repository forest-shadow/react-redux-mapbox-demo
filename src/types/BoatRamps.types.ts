import {FeatureCollection, MultiPolygon} from "geojson";

export interface IBoatRampsData extends FeatureCollection<MultiPolygon> {
  totalFeatures: number;
}

export enum BOAT_RAMP_FILTER_NAME {
  MATERIAL = 'material',
  AREA = 'area_'
}

export interface IBoatRampsFilterConfig {
  value: string;
  name: BOAT_RAMP_FILTER_NAME;
  range?: number[]
}