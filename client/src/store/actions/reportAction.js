import { report } from "../../services";
import { PASS, FAIL } from "../constants";

export const pass = async (
  { item_id, request_id, next_test_date },
  dispatch
) => {
  const data = await report({
    item_id,
    request_id,
    next_test_date,
    condition: PASS,
  });
  if (data !== undefined && data != null && data !== "") {
    dispatch({
      type: PASS,
      payload: {
        condition: PASS,
        item_id,
        request_id,
        next_test_date,
      },
    });
  } else {
    dispatch({
      type: "PASS_ERROR",
      payload: data,
    });
  }
};
export const fail = async ({ item_id, request_id, reason }, dispatch) => {
  const data = await report({ item_id, request_id, reason, condition: FAIL });
  if (data !== undefined && data != null && data !== "") {
    dispatch({
      type: FAIL,
      payload: {
        condition: FAIL,
        reason,
        item_id,
        request_id,
      },
    });
  } else {
    dispatch({
      type: "FAIL_ERROR",
      payload: data,
    });
  }
};
