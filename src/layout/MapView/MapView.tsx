import React from 'react';
import {Map} from 'react-map-gl';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import {
  goldenCostInitialViewState,
  MAPBOX_STYLES,
  maxBounds,
} from './mapView.constants'
import {BoatRampAreasLayer, BoatRampLocationsLayer} from './Layers';
import {boatRampsSelector, rampPointsSelector} from "store/selectors";
import {IBoatRampsFilterConfig} from "types/BoatRamps.types";

interface IMapView {
  boatRampsFilter: IBoatRampsFilterConfig | null;
  mapHeight: number;
}

export const MapView = ({
  boatRampsFilter,
  mapHeight
}: IMapView) => {
  const boatRampsData = useSelector(boatRampsSelector);
  const rampPointsData = useSelector(rampPointsSelector);

  return (
    <Box width="80%">
      <Map
        initialViewState={goldenCostInitialViewState}
        style={{width: '100%', height: mapHeight}}
        mapStyle={MAPBOX_STYLES}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        maxBounds={maxBounds}
      >
        {
          !!boatRampsData && (
            <BoatRampAreasLayer
              boatRampsData={boatRampsData}
              boatRampsFilter={boatRampsFilter}
            />
          )
        }
        {!!rampPointsData && (
          <BoatRampLocationsLayer
            pointsSource={rampPointsData}
            boatRampsFilter={boatRampsFilter}
          />
        )}
      </Map>
    </Box>
  );
};
