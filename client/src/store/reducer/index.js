import { combineReducers } from "redux";
import { locationReducer } from "./locationReducer";
const reducer = combineReducers({
  locations: locationReducer,
});
export default reducer;
