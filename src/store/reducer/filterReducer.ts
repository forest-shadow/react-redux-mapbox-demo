import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilterState {
  value: string | null
}

const initialState: IFilterState = { value: null };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state: IFilterState, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    resetFilter(state: IFilterState) {
      state.value = null;
    },
  },
})

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;