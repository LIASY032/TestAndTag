import { userLogin } from "../../services";
import { LOGIN } from "../constants";
export const login = async (user, dispatch) => {
  const data = await userLogin(user);

  if (
    data !== undefined &&
    data != null &&
    data !== "" &&
    data !== "undefined"
  ) {
    dispatch({
      type: LOGIN,
      payload: data,
    });
    return true;
  } else {
    dispatch({
      type: "USER_LOGIN_ERROR",
      payload: data,
    });
    return false;
  }
};
