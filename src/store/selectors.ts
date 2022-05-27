import {IAppState} from "store/index";

export const boatRampsSelector = (state: IAppState) => state.boatRamps.raw;
export const filterSelector = () => {};