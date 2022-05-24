import React, {useEffect, useState} from 'react';
import {FeatureCollection, Point} from "geojson";
import {Map} from 'react-map-gl';
import {getPointsSource} from './mapView.utils';
import {
  goldenCostInitialViewState,
  MAPBOX_STYLES,
  maxBounds,
} from './mapView.constants'
import {BoatRampAreasLayer, BoatRampLocationsLayer} from './Layers';
import {IBoatRampsData, IBoatRampsFilterConfig} from "types/BoatRamps.types";

interface IMapView {
  boatRampsData: IBoatRampsData;
  boatRampsFilter: IBoatRampsFilterConfig | null;
  mapHeight: number;
}

export const MapView = ({
  boatRampsData,
  boatRampsFilter,
  mapHeight
}: IMapView) => {
  const [pointsSource, setPointSource] = useState<FeatureCollection<Point>>();
  useEffect(() => {
    setPointSource(getPointsSource(boatRampsData))
  }, [boatRampsData])

  return (
      <Map
        initialViewState={goldenCostInitialViewState}
        style={{width: '100%', height: mapHeight}}
        mapStyle={MAPBOX_STYLES}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        maxBounds={maxBounds}
      >
        <BoatRampAreasLayer
          boatRampsData={boatRampsData}
          boatRampsFilter={boatRampsFilter}
        />
        {!!pointsSource && (
          <BoatRampLocationsLayer
            pointsSource={pointsSource}
            boatRampsFilter={boatRampsFilter}
          />
        )}
      </Map>
  );
};
