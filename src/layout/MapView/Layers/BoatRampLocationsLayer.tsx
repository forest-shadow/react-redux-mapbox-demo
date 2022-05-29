import React from 'react';
import {Layer, LayerProps, Source} from 'react-map-gl';
import {getLayerFilterConfig} from "./mapLayers.utils";
import COLORS from 'utils/colors';
import {IBoatRampsFilterConfig, IRampPointsData} from "types/BoatRamps.types";

interface IBoatRampLocationsLayer {
  pointsSource: IRampPointsData;
  boatRampsFilter: IBoatRampsFilterConfig | null;
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
    'circle-stroke-opacity': 1,
  }
};

export const BoatRampLocationsLayer = ({pointsSource, boatRampsFilter}: IBoatRampLocationsLayer) => {
  const filterConfig = getLayerFilterConfig(boatRampsFilter);
  return (
    <Source
      id="boat-ramps-locations"
      type="geojson"
      data={pointsSource}
    >
      <Layer {...layerStyles} {...filterConfig} />
    </Source>
  );
};
