import React from 'react';
import {Layer, LayerProps, Source} from 'react-map-gl';
import {getLayerFilterConfig} from "./mapLayers.utils";
import COLORS from "utils/colors";
import {IBoatRampsData, IBoatRampsFilterConfig} from "types/BoatRamps.types";

interface IBoatRampAreasLayer {
  boatRampsData: IBoatRampsData;
  boatRampsFilter: IBoatRampsFilterConfig | null;
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
  const filterConfig = getLayerFilterConfig(boatRampsFilter);
  return (
    <Source
      id="boat-ramp-areas"
      type="geojson"
      data={boatRampsData}
    >
      <Layer {...layerStyles} {...filterConfig} />
      <Layer {...layer2Styles}  {...filterConfig} />
    </Source>
  );
};
