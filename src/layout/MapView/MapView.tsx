import React from 'react';
import {useSelector} from "react-redux";
import {Map} from 'react-map-gl';
import {Box} from "@mui/material";
import {
  goldenCostInitialViewState,
  MAPBOX_STYLES,
  maxBounds,
} from './mapView.constants'
import {BoatRampAreasLayer, BoatRampLocationsLayer} from 'components/MapViewLayers';
import {boatRampsSelector, filterConfigSelector, rampPointsSelector} from "store/selectors";

interface IMapView {
  mapHeight: number;
}

export const MapView = ({
  mapHeight
}: IMapView) => {
  const boatRampsData = useSelector(boatRampsSelector);
  const rampPointsData = useSelector(rampPointsSelector);
  const boatRampsFilter = useSelector(filterConfigSelector);

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
