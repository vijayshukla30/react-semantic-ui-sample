const contactInitialState = {
  contacts: {
    loading: false,
    error: null,
    data: [],
    isSearchActive: false,
    foundContacts: [],
  },
  addContact: {
    loading: false,
    error: null,
    data: null,
  },
};

export default contactInitialState;
