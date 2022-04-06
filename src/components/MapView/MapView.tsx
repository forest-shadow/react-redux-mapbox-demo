import React, {useEffect, useState} from 'react';
import {FeatureCollection, Point, MultiPolygon} from "geojson";
import {Map} from 'react-map-gl';
import {getPointsSource} from './mapView.utils';
import {
  goldenCostInitialViewState,
  APP_BAR_HEIGHT,
  MAPBOX_STYLES,
  maxBounds,
} from './mapView.constants'
import {BoatRampAreasLayer, BoatRampLocationsLayer} from './Layers';

interface IMapView {
  boatRampsData: FeatureCollection<MultiPolygon>;
}

export const MapView = ({boatRampsData}: IMapView) => {
  const [pointsSource, setPointSource] = useState<FeatureCollection<Point>>();
  useEffect(() => {
    setPointSource(getPointsSource(boatRampsData))
  }, [boatRampsData])

  return (
    <Map
      initialViewState={goldenCostInitialViewState}
      style={{width: '100%', height: window.innerHeight - APP_BAR_HEIGHT}}
      mapStyle={MAPBOX_STYLES}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      maxBounds={maxBounds}
    >
      <BoatRampAreasLayer
        boatRampsData={boatRampsData}
      />
      {!!pointsSource && <BoatRampLocationsLayer
        pointsSource={pointsSource}
      /> }
    </Map>
  );
};
