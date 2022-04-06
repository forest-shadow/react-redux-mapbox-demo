import React from 'react';
import {Layer, LayerProps, Source} from 'react-map-gl';
import {FeatureCollection, MultiPolygon} from 'geojson';
import {COLORS} from "../mapView.constants";

interface IBoatRampAreasLayer {
  boatRampsData: FeatureCollection<MultiPolygon>;
}

export const layerStyles: LayerProps = {
  'id': 'maine',
  'type': 'fill',
  'paint': {
    'fill-color': COLORS.blue,
    'fill-opacity': 0.5
  }
};

export const layer2Styles: LayerProps = {
  'id': 'outline',
  'type': 'line',
  'paint': {
    'line-color': 'pink',
    'line-width': 3
  }
}

export const BoatRampAreasLayer = ({boatRampsData}: IBoatRampAreasLayer) => {
  return (
    <Source
      id="boat-ramp-areas"
      type="geojson"
      data={boatRampsData}
    >
      <Layer {...layerStyles} />
      <Layer {...layer2Styles} />
    </Source>
  );
};
