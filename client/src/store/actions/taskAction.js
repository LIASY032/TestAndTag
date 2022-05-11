import { getTodo } from "../../services";
import { TASKS } from "../constants";
export const getTasks = async (dispatch) => {
  const data = await getTodo();

  if (
    data !== undefined &&
    data != null &&
    data !== "" &&
    data !== "undefined"
  ) {
    localStorage.setItem("tasks", JSON.stringify(data));
    dispatch({
      type: TASKS,
      payload: data,
    });
    return true;
  } else {
    dispatch({
      type: "GET_TASKS_ERROR",
      payload: data,
    });
    return false;
  }
};
