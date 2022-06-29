import React, {useRef, RefObject, useState} from "react";
import {useSelector} from "react-redux";
import {LngLatBounds, Map, MapRef} from "react-map-gl";
import {Box} from "@mui/material";
import {
  goldenCostInitialViewState,
  MAPBOX_STYLES,
  maxBounds,
} from './mapView.constants'
import {BoatRampAreasLayer, BoatRampLocationsLayer} from 'components/MapViewLayers';
import {boatRampsSelector, filterConfigSelector, rampPointsSelector} from "store/selectors";
import {useVisibleMapData} from "./useVisibleMapData";

interface IMapView {
  mapHeight: number;
}

export const MapView = ({
  mapHeight
}: IMapView) => {
  const mapRef = useRef() as RefObject<MapRef>;

  const [mapBounds, setMapBounds] = useState<LngLatBounds>();

  const boatRampsData = useSelector(boatRampsSelector);
  const rampPointsData = useSelector(rampPointsSelector);
  const boatRampsFilter = useSelector(filterConfigSelector);

  const { visibleBoatRamps, visibleRampPoints} = useVisibleMapData({
    mapBounds,
    boatRampsData,
    rampPointsData
  });

  const setCurrentMapBoundsHandler = (mapRef: RefObject<MapRef>) => {
    if (mapRef && mapRef?.current) {
      setMapBounds(mapRef?.current?.getBounds())
    }
  }

  return (
    <Box width="80%">
      <Map
        ref={mapRef}
        initialViewState={goldenCostInitialViewState}
        style={{width: '100%', height: mapHeight}}
        mapStyle={MAPBOX_STYLES}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        maxBounds={maxBounds}
        onMoveEnd={() => {
          setCurrentMapBoundsHandler(mapRef)
        }}
        onLoad={() => {
          setCurrentMapBoundsHandler(mapRef)
        }}
      >
        {
          !!visibleBoatRamps && (
            <BoatRampAreasLayer
              boatRampsData={visibleBoatRamps}
              boatRampsFilter={boatRampsFilter}
            />
          )
        }

        {!!visibleRampPoints && (
          <BoatRampLocationsLayer
            pointsSource={visibleRampPoints}
            boatRampsFilter={boatRampsFilter}
          />
        )}
      </Map>
    </Box>
  );
};
