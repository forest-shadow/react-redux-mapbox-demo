import {Feature, MultiPolygon} from "geojson";
import {IBoatRampsData} from "types/BoatRamps.types";
import {
  BOAT_RAMPS_SIZE_CATEGORY,
  boatRampSizesConfigCollection
} from "./rampSizeBarChart.constants";

export const getSizeChartData = (boatRampsData: IBoatRampsData) => {
  const rampSizeCounter: {[key: string]: number} = boatRampsData.features.reduce((acc: {[key: string]: number}, feature: Feature<MultiPolygon>) => {
    const currentCategorySizeConfig = boatRampSizesConfigCollection.find(({range}) => feature.properties?.area_ >= range[0] && feature.properties?.area_ <=range[1])

    if(currentCategorySizeConfig) {
      if(acc[currentCategorySizeConfig.label])
        acc[currentCategorySizeConfig.label]++;
      else acc[currentCategorySizeConfig.label] = 1;
    }
    return acc;
  }, {});
  const rampSizeLabels = Object.values(BOAT_RAMPS_SIZE_CATEGORY);

  return {
    rampSizeCounter,
    rampSizeLabels
  }
};