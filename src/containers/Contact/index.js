import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Header from "../../components/Header";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Providers";
import ContactListUI from "../../layout/Contact";

const Contact = () => {
  const { contactsState, contactsDispatch } = useContext(GlobalContext);
  const history = useHistory();
  useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);

  return (
    <Container fluid>
      <Header />
      <Container>
        <ContactListUI state={contactsState} />
      </Container>
    </Container>
  );
};

export default Contact;
