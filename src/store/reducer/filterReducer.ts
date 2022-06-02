import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {BOAT_RAMP_FILTER_NAME} from "types/BoatRamps.types";

export type TFilterRange = number[] | null;
export interface IFilterState {
  value: string | null;
  name: BOAT_RAMP_FILTER_NAME | null;
  range?: TFilterRange;
}

export const defaultFilterState: IFilterState = {
  value: null,
  name: null,
  range: null
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: defaultFilterState,
  reducers: {
    setFilter(state: IFilterState, action: PayloadAction<IFilterState>) {
      state.value = action.payload.value;
      state.name = action.payload.name;
      state.range = action.payload.range;
    },
    resetFilter(state: IFilterState) {
      state.value = null;
      state.name = null;
      state.range = null;
    },
  },
})

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;