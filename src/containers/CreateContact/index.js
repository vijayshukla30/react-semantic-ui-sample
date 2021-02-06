import React from "react";
import {
  Card,
  Container,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";
import Header from "../../components/Header";
import CreateContactUI from "../../layout/CreateContact";

function CreateContact() {
  return (
    <Container fluid>
      <Header />
      <Grid centered className="register-form">
        <Grid.Row stretched>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={10}>
            <SemanticHeader textAlign="center">Create Contact</SemanticHeader>
            <Segment>
              <CreateContactUI />
            </Segment>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default CreateContact;
