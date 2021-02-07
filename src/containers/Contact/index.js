/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import deleteContact from "../../context/actions/contacts/deleteContact";
import getContacts from "../../context/actions/contacts/getContacts";
import startUnstar from "../../context/actions/contacts/startUnstar";
import { GlobalContext } from "../../context/Providers";
import ContactListUI from "../../layout/Contact";

const Contact = () => {
  const { contactsState, contactsDispatch } = useContext(GlobalContext);
  const history = useHistory();
  const {
    contacts: { data },
  } = contactsState;

  const handleDeleteContact = (id) => {
    deleteContact(id)(contactsDispatch);
  };

  const handleStarUnstarContact = (id, is_favorite) => {
    startUnstar(id, !is_favorite)(contactsDispatch);
  };
  useEffect(() => {
    if (data.length === 0) {
      getContacts(history)(contactsDispatch);
    }
  }, []);

  return (
    <ContactListUI
      state={contactsState}
      deleteContact={handleDeleteContact}
      starUnstarContact={handleStarUnstarContact}
    />
  );
};

export default Contact;
