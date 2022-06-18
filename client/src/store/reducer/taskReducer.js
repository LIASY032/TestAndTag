import { TASKS, TASK_SELECTED, TASK_MODIFIED } from "../constants";

export const taskReducer = (
  state = JSON.parse(
    localStorage.getItem("tasks") || `{"lists":[], "selected": 0}`
  ),

  action
) => {
  switch (action.type) {
    case TASKS:
      return { lists: action.payload, selected: state.selected };

    case TASK_SELECTED:
      const newTasks = { lists: state.lists, selected: action.payload };
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    case TASK_MODIFIED:
      state.lists[action.payload.num] = action.payload.task;
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
