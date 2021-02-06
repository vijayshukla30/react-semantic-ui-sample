import {
  CONTACTS_CREATE_CLEAR,
  CONTACTS_CREATE_ERROR,
  CONTACTS_CREATE_LOADING,
  CONTACTS_CREATE_SUCCESS,
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
    case CONTACTS_CREATE_LOADING:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: true,
          error: null,
        },
      };

    case CONTACTS_CREATE_SUCCESS:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: payload,
        },
        contacts: {
          ...state.contacts,
          loading: false,
          data: [payload, ...state.contacts.data],
        },
      };

    case CONTACTS_CREATE_ERROR:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          error: [payload, ...state.contacts.data],
        },
      };
    case CONTACTS_CREATE_CLEAR:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          error: null,
          data: null,
        },
      };
    default:
      return state;
  }
};

export default contact;
