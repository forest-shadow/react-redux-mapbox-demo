import React, {useRef, RefObject, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LngLatBounds, Map, MapRef} from "react-map-gl";
import {BoatRampAreasLayer, BoatRampLocationsLayer} from 'components/MapViewLayers';
import {useVisibleMapData} from "./useVisibleMapData";
import {getBoatRampsDataThunk} from "store/thunks";
import {boatRampsSelector, filterConfigSelector, rampPointsSelector} from "store/selectors";
import {
  goldenCostInitialViewState,
  MAPBOX_STYLES,
  maxBounds,
} from './mapView.constants'
import {TThunkDispatch} from "types/Store.types";


interface IMapView {
  mapHeight: number;
}

export const MapView = ({
  mapHeight
}: IMapView) => {
  const dispatch = useDispatch<TThunkDispatch>();
  const mapRef = useRef() as RefObject<MapRef>;

  useEffect(() => {
    dispatch(getBoatRampsDataThunk());
  }, [dispatch]);

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
  );
};
