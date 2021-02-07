import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Providers";
import ContactListUI from "../../layout/Contact";

const Contact = () => {
  const { contactsState, contactsDispatch } = useContext(GlobalContext);
  const history = useHistory();
  useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);

  return <ContactListUI state={contactsState} />;
};

export default Contact;
