import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
import {IFilterState} from "./reducer/filterReducer";
import {IBoatRampsState} from "./reducer/boatRampsReducer";

export interface IAppState {
  filter: IFilterState;
  boatRamps: IBoatRampsState
}
const store = configureStore<IAppState>({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;