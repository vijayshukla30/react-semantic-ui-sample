import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../constants/actionTypes";
import axiosInstance from "../../helpers/axios";

export const login = ({ username, password }) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  try {
    const response = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
    console.log("response.data :>> ", response.data);
    localStorage.token = response.data.token;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data,
    });
    console.log("error :>> ", error);
  }
};
