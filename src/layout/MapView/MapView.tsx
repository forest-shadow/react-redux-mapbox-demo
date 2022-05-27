import React, {useEffect, useState} from 'react';
import {FeatureCollection, Point} from "geojson";
import {Map} from 'react-map-gl';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import {getPointsSource} from './mapView.utils';
import {
  goldenCostInitialViewState,
  MAPBOX_STYLES,
  maxBounds,
} from './mapView.constants'
import {BoatRampAreasLayer, BoatRampLocationsLayer} from './Layers';
import {boatRampsSelector} from "store/selectors";
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
  const [pointsSource, setPointSource] = useState<FeatureCollection<Point>>();
  useEffect(() => {
    if (boatRampsData) {
      setPointSource(getPointsSource(boatRampsData))
    }
  }, [boatRampsData])

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
        {!!pointsSource && (
          <BoatRampLocationsLayer
            pointsSource={pointsSource}
            boatRampsFilter={boatRampsFilter}
          />
        )}
      </Map>
    </Box>
  );
};
