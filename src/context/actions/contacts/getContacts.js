import {
  CONTACTS_FAILED,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

/* eslint-disable import/no-anonymous-default-export */
export default (history) => async (dispatch) => {
  dispatch({
    type: CONTACTS_LOADING,
  });
  try {
    const response = await axiosInstance(history).get("/contacts/");
    console.log("response.data :>> ", response.data);

    dispatch({
      type: CONTACTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("error :>> ", error);
    dispatch({
      type: CONTACTS_FAILED,
      payload: error.response ? error.response.data : "Connection Error",
    });
  }
};
