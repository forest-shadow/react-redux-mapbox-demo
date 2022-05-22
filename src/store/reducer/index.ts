import {combineReducers} from "redux";
import filter from './filterReducer';
import boatRamps from './boatRampsReducer';

const reducer = combineReducers({
  boatRamps,
  filter
});

export default reducer;