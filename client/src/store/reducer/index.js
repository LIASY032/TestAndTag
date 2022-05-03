import { combineReducers } from "redux";
import { locationReducer } from "./locationReducer";
import { userReducer } from "./userReducer";
const reducer = combineReducers({
  locations: locationReducer,
  user: userReducer,
});
export default reducer;
