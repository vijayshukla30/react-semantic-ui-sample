import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";
import Header from "../../components/Header";
import addContact from "../../context/actions/contacts/addContact";
import clearCreateContact from "../../context/actions/contacts/clearCreateContact";
import { GlobalContext } from "../../context/Providers";
import CreateContactUI from "../../layout/CreateContact";

function CreateContact() {
  const [fieldErrors, setFieldErrors] = useState({});
  const history = useHistory();
  const {
    contactsDispatch,
    contactsState: {
      addContact: { loading, error, data },
    },
  } = React.useContext(GlobalContext);
  const createContact = (values) => {
    addContact(values, history)(contactsDispatch);
  };
  useEffect(() => {
    if (error) {
      console.log("error :>> ", error);
      for (let item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  useEffect(() => {
    console.log("data :>> ", data);
    if (data) {
      history.push("/");
    }
    return () => {
      clearCreateContact()(contactsDispatch);
    };
  }, [data]);

  return (
    <Container fluid>
      <Grid centered className="register-form">
        <Grid.Row stretched>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={10}>
            <SemanticHeader textAlign="center">Create Contact</SemanticHeader>
            <Segment>
              <CreateContactUI
                handleSubmit={createContact}
                isSubmitting={loading}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default CreateContact;
