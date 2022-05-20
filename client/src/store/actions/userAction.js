import { userLogin } from "../../services";
import { LOGIN } from "../constants";
import { getTasks } from "./taskAction";
export const login = async (user, dispatch) => {
  const data = await userLogin(user);

  if (
    data !== undefined &&
    data != null &&
    data !== "" &&
    data !== "undefined"
  ) {
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({
      type: LOGIN,
      payload: data,
    });

    await getTasks(dispatch);
    return true;
  } else {
    dispatch({
      type: "USER_LOGIN_ERROR",
      payload: data,
    });
    return false;
  }
};
