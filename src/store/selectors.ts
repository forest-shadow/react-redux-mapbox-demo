import {createSelector} from "@reduxjs/toolkit";
import {IAppState} from "store/index";
import {getPointsSource} from "utils/boatRamps.utils";

export const boatRampsSelector = (state: IAppState) => state.boatRamps.raw;
export const rampPointsSelector = createSelector(
  [boatRampsSelector],
  (boatRampsData ) => { return boatRampsData ? getPointsSource(boatRampsData) : null; }
)

export const filterSelector = () => {};