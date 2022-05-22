import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IBoatRampsData} from "../../types/BoatRamps.types";

export interface IBoatRampsState {
  raw: null | IBoatRampsData;
}

const initialState: IBoatRampsState = { raw: null };

const boatRampsSlice = createSlice({
  name: 'boatRamps',
  initialState,
  reducers: {
    setRawBoatRampsData(state: IBoatRampsState, action: PayloadAction<IBoatRampsData>) {
      state.raw = action.payload;
    },
  },
})

export const { setRawBoatRampsData } = boatRampsSlice.actions;
export default boatRampsSlice.reducer;