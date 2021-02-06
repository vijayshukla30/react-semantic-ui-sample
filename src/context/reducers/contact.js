import {
  CONTACTS_FAILED,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
  LOGOUT_USER,
} from "../../constants/actionTypes";
import contactInitialState from "../initialstates/contactInitialState";

const contact = (state, { payload, type }) => {
  switch (type) {
    case CONTACTS_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true,
          error: null,
        },
      };

    case CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: payload,
        },
      };

    case CONTACTS_FAILED:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          error: payload,
        },
      };

    case LOGOUT_USER:
      return {
        ...state,
        contactInitialState,
      };
    default:
      return state;
  }
};

export default contact;
