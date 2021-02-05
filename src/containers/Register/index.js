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
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = (values) => {
    console.log("values :>> ", values);
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <Container fluid>
      <Header />
      <Grid columns={3} className="register-form">
        <Grid.Row stretched>
          <Grid.Column />
          <Grid.Column>
            <SemanticHeader textAlign="center">Sign Up</SemanticHeader>
            <Segment>
              <RegisterUI handleSubmit={onSubmit} isSubmitting={isSubmitting} />
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Register;
