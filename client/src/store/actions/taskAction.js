import { getTodo, updateItem } from "../../services";
import { TASKS, TASK_MODIFIED, TASK_SELECTED } from "../constants";
export const getTasks = async (dispatch) => {
  const data = await getTodo();

  if (
    data !== undefined &&
    data != null &&
    data !== "" &&
    data !== "undefined"
  ) {
    localStorage.setItem(
      "tasks",
      `{ "lists": ${JSON.stringify(data)}, "selected": 0 }`
    );
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

export const taskModified = async (num, task, dispatch) => {
  await updateItem(task);
  dispatch({
    type: TASK_MODIFIED,
    payload: { num, task },
  });
};

export const taskSelected = async (num, dispatch) => {
  dispatch({
    type: TASK_SELECTED,
    payload: num,
  });
};
