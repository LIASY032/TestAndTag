import { userLogin, userLogout } from "../../services";
import { LOGIN, LOGOUT } from "../constants";

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

    return true;
  } else {
    dispatch({
      type: "USER_LOGIN_ERROR",
      payload: data,
    });
    return false;
  }
};

export const logout = async (dispatch) => {
  const data = await userLogout();
  localStorage.setItem("user", "{}");

  console.log(data);
  dispatch({
    type: LOGOUT,
    payload: {},
  });
};
