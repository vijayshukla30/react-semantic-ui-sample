import {
  CONTACTS_CREATE_CLEAR,
  CONTACTS_CREATE_ERROR,
  CONTACTS_CREATE_LOADING,
  CONTACTS_CREATE_SUCCESS,
  CONTACTS_FAILED,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
  LOGOUT_USER,
  SEARCH_CONTACTS,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_LOADING,
  ADD_REMOVE_STAR_SUCCESS,
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
    case DELETE_CONTACT_LOADING: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: state.contacts.data.map((item) => {
            if (item.id === payload) {
              return { ...item, deleting: true };
            }
            return item;
          }),
        },
      };
    }

    case ADD_REMOVE_STAR_SUCCESS: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.map((item) => {
            if (item.id === payload.id) {
              return payload;
            }
            return item;
          }),
        },
      };
    }

    case DELETE_CONTACT_SUCCESS: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: state.contacts.data.filter((item) => item.id !== payload),
        },
      };
    }
    case SEARCH_CONTACTS: {
      const searchValue = payload?.toLowerCase();
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          isSearchActive: !!payload.length > 0 || false,
          foundContacts: state.contacts.data.filter((item) => {
            try {
              return (
                item.first_name.toLowerCase().search(searchValue) !== -1 ||
                item.last_name.toLowerCase().search(searchValue) !== -1 ||
                item.phone_number.toLowerCase().search(searchValue) !== -1
              );
            } catch (error) {
              return [];
            }
          }),
        },
      };
    }
    default:
      return state;
  }
};

export default contact;
