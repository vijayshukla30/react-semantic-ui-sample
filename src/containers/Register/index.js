import React, { useState, useEffect } from "react";
import RegisterUI from "../../layout/Register";
import Header from "../../components/Header";
import {
  Container,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";

import { GlobalContext } from "../../context/Providers";
import { register } from "../../context/actions/register";

function Register() {
  const [fieldErrors, setFieldErrors] = useState({});

  const {
    authDispatch,
    authState: {
      auth: { loading, user, error },
    },
  } = React.useContext(GlobalContext);
  const onSubmit = (values) => {
    register(values)(authDispatch);
  };

  const onReset = () => {
    setFieldErrors({});
  };

  useEffect(() => {
    if (error) {
      console.log("error :>> ", error);
      for (let item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  return (
    <Container fluid>
      <Header />
      <Grid columns={3} className="register-form">
        <Grid.Row stretched>
          <Grid.Column />
          <Grid.Column>
            <SemanticHeader textAlign="center">Sign Up</SemanticHeader>
            <Segment>
              <RegisterUI
                handleSubmit={onSubmit}
                isSubmitting={loading}
                fieldErrors={fieldErrors}
                onReset={onReset}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Register;
