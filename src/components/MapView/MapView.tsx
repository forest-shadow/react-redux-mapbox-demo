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
import {useWindowSize} from "./useWindowSize";
import {IBoatRampsFilterConfig} from "../../App";

interface IMapView {
  boatRampsData: FeatureCollection<MultiPolygon>;
  boatRampsFilter: IBoatRampsFilterConfig | null;
}

export const MapView = ({
  boatRampsData,
  boatRampsFilter
}: IMapView) => {
  const [pointsSource, setPointSource] = useState<FeatureCollection<Point>>();
  useEffect(() => {
    setPointSource(getPointsSource(boatRampsData))
  }, [boatRampsData])
  const windowSize = useWindowSize();

  return (
      <Map
        initialViewState={goldenCostInitialViewState}
        style={{width: '100%', height: windowSize.height - APP_BAR_HEIGHT}}
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
