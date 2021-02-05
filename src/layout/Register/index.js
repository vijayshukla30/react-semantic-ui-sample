import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { Field, withFormik } from "formik";
import SemanticFormikInputField from "../../components/SemanticInput";

const RegisterUI = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="username"
        label="Username"
        placeholder="user@user.user"
        type="email"
        component={SemanticFormikInputField}
      />
      <Field
        name="firstName"
        label="First Name"
        placeholder="firstname"
        component={SemanticFormikInputField}
      />

      <Field
        name="lastName"
        label="Last Name"
        placeholder="lastname"
        component={SemanticFormikInputField}
      />

      <Field
        name="password"
        label="Password"
        placeholder="password"
        type="password"
        component={SemanticFormikInputField}
      />

      <Field
        name="confirm_password"
        label="Re-enter Password"
        placeholder="Re-enter Password"
        type="password"
        component={SemanticFormikInputField}
      />

      <Button.Group fluid>
        <Button positive type="Submit">
          Create Account
        </Button>
        <Button.Or />
        <Button>Already have account?</Button>
      </Button.Group>
    </Form>
  );
};

export default withFormik({
  handleSubmit: (values, formikBag) => {
    console.log("VALUES", values);
    console.log("FORMIK BAG", formikBag);
  },
})(RegisterUI);
