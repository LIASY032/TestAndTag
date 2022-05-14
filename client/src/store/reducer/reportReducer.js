import { PASS, FAIL } from "../constants";

export const reportReducer = (
  state = JSON.parse(localStorage.getItem("report") || "{}"),
  action
) => {
  switch (action.type) {
    case PASS:
      return action.payload;
    case FAIL:
      return action.payload;
    default:
      return state;
  }
};
