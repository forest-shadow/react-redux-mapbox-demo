import { createSlice } from '@reduxjs/toolkit';
import {IBoatRampsData} from "types/BoatRamps.types";
import {getBoatRampsData} from "store/thunks";

export interface IBoatRampsState {
  raw: null | IBoatRampsData;
}

const initialState: IBoatRampsState = { raw: null };

export const boatRampsSliceName = 'boatRamps';
const boatRampsSlice = createSlice<IBoatRampsState, {}>({
  name: boatRampsSliceName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBoatRampsData.fulfilled, (state: IBoatRampsState, { payload }) => {
      state.raw = payload
    })
  }
})

export default boatRampsSlice.reducer;