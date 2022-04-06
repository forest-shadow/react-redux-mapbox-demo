import {FeatureCollection, Point} from 'geojson';
import {centroid, multiPolygon, MultiPolygon} from '@turf/turf';

export const getPointsSource = (source: FeatureCollection<MultiPolygon>): FeatureCollection<Point> => {
  return {
    type: 'FeatureCollection',
    features: source.features.map(({geometry}) => {
      const polygonShape = multiPolygon(geometry.coordinates);

      return centroid(polygonShape)
    })
  }
};
