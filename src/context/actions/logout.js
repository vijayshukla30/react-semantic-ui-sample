import { LOGOUT_USER } from "../../constants/actionTypes";

/* eslint-disable import/no-anonymous-default-export */
export default (history) => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER,
  });

  history.push("/auth/login");
};
