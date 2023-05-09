import {Feature, MultiPolygon} from "geojson";
import {IBoatRampsData} from "types/BoatRamps.types";

export const getMaterialChartData = (boatRampsData: IBoatRampsData) => {
  const rampMaterialCounter: {[key: string]: number} = boatRampsData.features.reduce((acc: {[key: string]: number}, feature: Feature<MultiPolygon>) => {
    if(acc[feature.properties?.material]) acc[feature.properties?.material]++;
    else acc[feature.properties?.material] = 1;
    return acc;
  }, {});
  const rampMaterialLabels = Object.keys(rampMaterialCounter)
    .sort((a, b) => a.localeCompare(b, 'en', { ignorePunctuation: true }));

  return {
    rampMaterialCounter,
    rampMaterialLabels
  }
}