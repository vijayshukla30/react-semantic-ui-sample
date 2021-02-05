import React from "react";
import RegisterUI from "../../layout/Register";
import Header from "../../components/Header";
import {
  Container,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";

function Register() {
  return (
    <Container fluid>
      <Header />
      <Grid columns={3} className="register-form">
        <Grid.Row stretched>
          <Grid.Column />
          <Grid.Column>
            <SemanticHeader textAlign="center">Sign Up</SemanticHeader>
            <Segment>
              <RegisterUI />
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Register;
