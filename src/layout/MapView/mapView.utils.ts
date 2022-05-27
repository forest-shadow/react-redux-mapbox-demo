import {FeatureCollection, Point} from 'geojson';
import {centroid, multiPolygon} from '@turf/turf';
import {IBoatRampsData} from "types/BoatRamps.types";

export const getPointsSource = (source: IBoatRampsData): FeatureCollection<Point> => {
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
