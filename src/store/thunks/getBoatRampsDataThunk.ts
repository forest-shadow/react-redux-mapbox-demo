import {fetchRampsData} from "utils/api";
import {setRawBoatRampsData} from "store/reducer/boatRampsReducer";
import {TThunkActionCreator} from "types/Store.types";

export const getBoatRampsDataThunk: TThunkActionCreator = () => async (dispatch) => {
   const boatRampsData = await fetchRampsData();
   if(boatRampsData) dispatch(setRawBoatRampsData(boatRampsData));
};
