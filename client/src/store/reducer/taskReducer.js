import { TASKS } from "../constants";

export const taskReducer = (
  state = JSON.parse(localStorage.getItem("tasks") || "[]"),

  action
) => {
  switch (action.type) {
    case TASKS:
      return action.payload;
    default:
      return state;
  }
};
