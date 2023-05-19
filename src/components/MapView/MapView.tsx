import React, {useRef, RefObject, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LngLatBounds, LngLatLike, Map, MapRef} from "react-map-gl";
import {centroid, multiPolygon} from "@turf/turf";
import {BoatRampAreasLayer, BoatRampLocationsLayer} from 'components/MapViewLayers';
import {getBoatRampsData} from "store/thunks";
import {boatRampsSelector, filterConfigSelector, rampPointsSelector} from "store/selectors";
import {
  goldenCostInitialViewState,
  MAPBOX_STYLES,
  maxBounds,
} from './mapView.constants'
import config from 'config';
import {TThunkDispatch} from "types/Store.types";
import {IBoatRampsData, IRampPointsData} from "types/BoatRamps.types";

interface IMapView {
  mapHeight: number;
}

export const MapView = ({
  mapHeight
}: IMapView) => {
  const dispatch = useDispatch<TThunkDispatch>();
  const mapRef = useRef() as RefObject<MapRef>;

  useEffect(() => {
    dispatch(getBoatRampsData());
  }, [dispatch]);

  const [mapBounds, setMapBounds] = useState<LngLatBounds>();

  const boatRampsData = useSelector(boatRampsSelector);
  const rampPointsData = useSelector(rampPointsSelector);
  const boatRampsFilter = useSelector(filterConfigSelector);

  const visibleBoatRamps = {
    ...boatRampsData,
    features: boatRampsData?.features.filter(feature => mapBounds?.contains(centroid(multiPolygon(feature.geometry.coordinates)).geometry.coordinates as LngLatLike))
  };
  const visibleRampPoints = {
    ...rampPointsData,
    features: rampPointsData?.features.filter(feature => mapBounds?.contains(feature.geometry.coordinates as LngLatLike))
  };

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
      mapboxAccessToken={config.mapboxToken}
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
            boatRampsData={visibleBoatRamps as IBoatRampsData}
            boatRampsFilter={boatRampsFilter}
          />
        )
      }

      {!!visibleRampPoints && (
        <BoatRampLocationsLayer
          pointsSource={visibleRampPoints as IRampPointsData}
          boatRampsFilter={boatRampsFilter}
        />
      )}
    </Map>
  );
};
