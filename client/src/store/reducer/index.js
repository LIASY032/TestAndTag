import { combineReducers } from "redux";
import { locationReducer } from "./locationReducer";
import { userReducer } from "./userReducer";
import { taskReducer } from "./taskReducer";
const reducer = combineReducers({
  locations: locationReducer,
  user: userReducer,
  tasks: taskReducer,
});
export default reducer;
