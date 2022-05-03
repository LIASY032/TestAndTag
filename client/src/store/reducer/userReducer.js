import { LOGIN } from "../constants";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
};
