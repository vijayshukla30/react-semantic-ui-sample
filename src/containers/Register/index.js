import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { register } from "../../context/actions/register";

function Register() {
  useEffect(() => {
    register();
  }, []);

  return (
    <div>
      <h1>Register</h1>
      <Link to="/auth/login">Login</Link>
    </div>
  );
}

export default Register;
