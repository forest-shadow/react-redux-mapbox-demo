import React from 'react';
import {Layer, LayerProps, Source} from 'react-map-gl';
import {FeatureCollection, MultiPolygon} from 'geojson';
import {COLORS} from "../mapView.constants";
import {getLayerFilterConfig} from "./mapLayers.utils";

interface IBoatRampAreasLayer {
  boatRampsData: FeatureCollection<MultiPolygon>;
  boatRampsFilter: string | null;
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

export const BoatRampAreasLayer = ({boatRampsData, boatRampsFilter}: IBoatRampAreasLayer) => {
  return (
    <Source
      id="boat-ramp-areas"
      type="geojson"
      data={boatRampsData}
    >
      <Layer {...layerStyles} {...getLayerFilterConfig(boatRampsFilter)} />
      <Layer {...layer2Styles}  {...getLayerFilterConfig(boatRampsFilter)} />
    </Source>
  );
};
