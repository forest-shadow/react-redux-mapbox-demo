import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
import {IFilterState} from './reducer/filterReducer';
import {IBoatRampsState} from './reducer/boatRampsReducer';
import config from 'config';

export interface IAppState {
  filter: IFilterState;
  boatRamps: IBoatRampsState
}
const store = configureStore<IAppState>({
  reducer,
  devTools: config.isDevEnvironment,
});

export default store;