/* eslint-disable import/no-anonymous-default-export */
import { CONTACTS_CREATE_CLEAR } from "../../../constants/actionTypes";
export default () => (dispatch) => {
  dispatch({
    type: CONTACTS_CREATE_CLEAR,
  });
};
