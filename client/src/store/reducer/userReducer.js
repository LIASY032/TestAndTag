import { LOGIN, LOGOUT } from "../constants";

export const userReducer = (
  state = JSON.parse(localStorage.getItem("user") || "{}"),
  action
) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
