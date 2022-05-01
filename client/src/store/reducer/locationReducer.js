import { LOCATIONS } from "../constants";

export const locationReducer = (state = [], action) => {
  switch (action.type) {
    case LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};
