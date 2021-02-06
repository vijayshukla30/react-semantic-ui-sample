import {
  CONTACTS_CREATE_ERROR,
  CONTACTS_CREATE_LOADING,
  CONTACTS_CREATE_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

/* eslint-disable import/no-anonymous-default-export */
export default (
  {
    country: country_code,
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phone_number,
    favourite: is_favorite,
  },
  history
) => async (dispatch) => {
  dispatch({
    type: CONTACTS_CREATE_LOADING,
  });
  console.log("country_code :>> ", country_code);

  try {
    const response = await axiosInstance(history).post("/contacts/", {
      country_code,
      first_name,
      last_name,
      phone_number,
      is_favorite,
    });
    console.log("response.data :>> ", response.data);
    dispatch({
      type: CONTACTS_CREATE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("error :>> ", error);
    dispatch({
      type: CONTACTS_CREATE_ERROR,
      payload: error.respose ? error.response.data : "Connection Error",
    });
  }
};
