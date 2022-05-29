import {centroid, multiPolygon} from '@turf/turf';
import {IBoatRampsData, IRampPointsData} from "types/BoatRamps.types";

export const getPointsSource = (source: IBoatRampsData): IRampPointsData => {
  return {
    type: 'FeatureCollection',
    features: source.features.map(({geometry, properties}) => {
      const polygonShape = multiPolygon(geometry.coordinates);

      return {
        ...centroid(polygonShape),
        properties,
      }
    })
  }
};