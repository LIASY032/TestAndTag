import { getLocations } from "../../services";
import { LOCATIONS } from "../constants";
export const locationInfo = async (dispatch) => {
  const data = await getLocations();
  if (data !== undefined && data != null && data !== "") {
    dispatch({
      type: LOCATIONS,
      payload: data,
    });
  } else {
    dispatch({
      type: "LOCATIONS_ERROR",
      payload: data,
    });
  }
};
