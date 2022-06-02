import {BOAT_RAMP_FILTER_NAME} from "types/BoatRamps.types";
import {IFilterState} from "store/reducer/filterReducer";

const filterProcessorsMap = {
  [BOAT_RAMP_FILTER_NAME.MATERIAL]: (boatRampsFilterConfig: IFilterState) => ({filter: ['==', BOAT_RAMP_FILTER_NAME.MATERIAL, boatRampsFilterConfig.value]}),
  [BOAT_RAMP_FILTER_NAME.AREA]: (boatRampsFilterConfig: IFilterState) => {
    if(!boatRampsFilterConfig || !boatRampsFilterConfig?.range) return {}
    return {
      filter: ['all', ['>=', ['get', BOAT_RAMP_FILTER_NAME.AREA], boatRampsFilterConfig?.range[0]], ['<', ['get', BOAT_RAMP_FILTER_NAME.AREA], boatRampsFilterConfig?.range[1]]]
    }
  }
}

export const getLayerFilterConfig = (boatRampsFilterConfig: IFilterState) =>
  boatRampsFilterConfig && boatRampsFilterConfig.name ? (filterProcessorsMap[boatRampsFilterConfig.name](boatRampsFilterConfig)) : {};