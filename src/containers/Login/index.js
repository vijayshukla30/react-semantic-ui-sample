import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Segment,
  Header as SemanticHeader,
  Message,
  Icon,
} from "semantic-ui-react";
import Header from "../../components/Header";
import { login } from "../../context/actions/login";
import { GlobalContext } from "../../context/Providers";
import LoginUI from "../../layout/Login";

function Login() {
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  const onSubmit = (values) => {
    login(values)(authDispatch);
  };

  const {
    authDispatch,
    authState: {
      auth: { loading, user, error },
    },
  } = React.useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      console.log("error :>> ", error);
      setLoginError("Invalid Login Details");
    }
  }, [error]);

  useEffect(() => {
    if (user?.user) {
      history.push("/");
    }
  }, [user]);

  return (
    <Container fluid>
      <Header />
      <Grid columns={3} className="register-form">
        <Grid.Row stretched>
          <Grid.Column />
          <Grid.Column>
            <SemanticHeader textAlign="center">Login</SemanticHeader>
            <Segment>
              {loginError && (
                <Message floating negative>
                  <Icon name="warning sign" /> {loginError}
                </Message>
              )}
              <LoginUI handleSubmit={onSubmit} isSubmitting={loading} />
              <Message warning>
                Don't have account?&nbsp;<a href="#">Register</a>&nbsp;instead.
              </Message>
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Login;
