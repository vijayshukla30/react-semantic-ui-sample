import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Link to="/auth/login">Login</Link>
    </div>
  );
}

export default Register;
