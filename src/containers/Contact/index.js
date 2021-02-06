import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Providers";

const Contact = () => {
  const context = useContext(GlobalContext);
  const history = useHistory();
  useEffect(() => {
    getContacts(history);
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Contact;
