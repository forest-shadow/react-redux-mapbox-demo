import {BOAT_RAMP_FILTER_NAME, IBoatRampsFilterConfig} from "types/BoatRamps.types";

const filterProcessorsMap = {
  [BOAT_RAMP_FILTER_NAME.MATERIAL]: (boatRampsFilterConfig: IBoatRampsFilterConfig) => ({filter: ['==', BOAT_RAMP_FILTER_NAME.MATERIAL, boatRampsFilterConfig.value]}),
  [BOAT_RAMP_FILTER_NAME.AREA]: (boatRampsFilterConfig: IBoatRampsFilterConfig) => {
    if(!boatRampsFilterConfig || !boatRampsFilterConfig?.range) return {}
    return {
      filter: ['all', ['>=', ['get', BOAT_RAMP_FILTER_NAME.AREA], boatRampsFilterConfig?.range[0]], ['<', ['get', BOAT_RAMP_FILTER_NAME.AREA], boatRampsFilterConfig?.range[1]]]
    }
  }
}

export const getLayerFilterConfig = (boatRampsFilterConfig: IBoatRampsFilterConfig | null) =>
  boatRampsFilterConfig ? (filterProcessorsMap[boatRampsFilterConfig.name](boatRampsFilterConfig)) : {};