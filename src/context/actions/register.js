import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../constants/actionTypes";
import axiosInstance from "../../helpers/axiosInstance";

export const register = ({
  username,
  password,
  firstName: first_name,
  lastName: last_name,
}) => async (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });

  try {
    const response = await axiosInstance().post("/auth/register", {
      username,
      email: username,
      first_name,
      last_name,
      password,
    });
    console.log("response.data :>> ", response.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: error.response.data,
    });
    console.log("error :>> ", error);
  }
};
