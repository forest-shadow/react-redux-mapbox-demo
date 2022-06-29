import {useEffect, useState} from "react";
import {IBoatRampsData, IRampPointsData} from "types/BoatRamps.types";
import {centroid, multiPolygon} from "@turf/turf";
import {LngLatBounds, LngLatLike} from "react-map-gl";

interface IUseVisibleMapData {
  mapBounds?: LngLatBounds;
  boatRampsData?: IBoatRampsData | null;
  rampPointsData?: IRampPointsData | null;
}
export const useVisibleMapData = ({
  mapBounds,
  boatRampsData,
  rampPointsData
}: IUseVisibleMapData) => {
  const [visibleBoatRamps, setVisibleBoatRamps] = useState<IBoatRampsData>();
  const [visibleRampPoints, setVisibleRampPoints] = useState<IRampPointsData>();

  useEffect(() => {
    if(mapBounds && boatRampsData && rampPointsData) {
      setVisibleBoatRamps({
        ...boatRampsData,
        features: boatRampsData?.features.filter(feature => mapBounds.contains(centroid(multiPolygon(feature.geometry.coordinates)).geometry.coordinates as LngLatLike))
      })

      setVisibleRampPoints({
        ...rampPointsData,
        features: rampPointsData?.features.filter(feature => mapBounds.contains(feature.geometry.coordinates as LngLatLike))
      })
    }
  }, [boatRampsData, rampPointsData, boatRampsData?.features, rampPointsData?.features, mapBounds, mapBounds?.ne, mapBounds?.sw]);

  return {
    visibleBoatRamps,
    visibleRampPoints
  }
};
