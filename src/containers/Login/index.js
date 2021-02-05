import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Providers";

function Login() {
  const {
    authDispatch,
    authState: {
      auth: { loading, user, error },
    },
  } = React.useContext(GlobalContext);

  return (
    <div>
      <h1>{user ? `Welcome ${user.username}` : ""} Login</h1>
      <Link to={"/auth/register"}>Register</Link>
    </div>
  );
}

export default Login;
