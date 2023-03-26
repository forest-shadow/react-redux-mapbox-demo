import {fetchRampsData} from "utils/api";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBoatRampsData} from "types/BoatRamps.types";
import {boatRampsSliceName} from "store/reducer/boatRampsReducer";

export const getBoatRampsData = createAsyncThunk<IBoatRampsData>(
  boatRampsSliceName + '/getBoatRampsData',
  async (name, { rejectWithValue }) => {
    const response = await fetchRampsData();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response);
    }
    return response;
  }
)