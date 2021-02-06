import React, { useState, useEffect } from "react";
import RegisterUI from "../../layout/Register";
import Header from "../../components/Header";
import {
  Container,
  Grid,
  Header as SemanticHeader,
  Message,
  Segment,
} from "semantic-ui-react";

import { GlobalContext } from "../../context/Providers";
import { register } from "../../context/actions/register";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const [fieldErrors, setFieldErrors] = useState({});
  const history = useHistory();
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

  useEffect(() => {
    if (user) {
      history.push("/auth/login");
    }
  }, [user]);

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
              <Message warning>
                Already have account?&nbsp;
                <Link to="/auth/login">Login</Link>&nbsp;instead.
              </Message>
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Register;
