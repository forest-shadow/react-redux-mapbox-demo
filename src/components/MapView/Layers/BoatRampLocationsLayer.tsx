import React from 'react';
import {Layer, LayerProps, Source} from 'react-map-gl';
import {COLORS} from '../mapView.constants';
import {FeatureCollection, Point} from 'geojson';

interface IBoatRampLocationsLayer {
  pointsSource: FeatureCollection<Point>;
}

export const layerStyles: LayerProps = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': COLORS.blue,
    'circle-opacity': 0.6,
    'circle-stroke-color': COLORS.blue,
    'circle-stroke-width': 1,
    'circle-stroke-opacity': 1
  }
};

export const BoatRampLocationsLayer = ({pointsSource}: IBoatRampLocationsLayer) => {
  return (
    <Source
      id="boat-ramps-locations"
      type="geojson"
      data={pointsSource}
    >
      <Layer {...layerStyles} />
    </Source>
  );
};
