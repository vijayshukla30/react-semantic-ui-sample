import React from "react";
import { Formik } from "formik";
import {
  Checkbox,
  Form,
  Input,
  ResetButton,
  SubmitButton,
} from "formik-semantic-ui-react";
import SignupSchema, { SignupInitialValues } from "../../utils/SignupSchema";
import { FormGroup } from "semantic-ui-react";

const RegisterUI = ({ isSubmitting, handleSubmit }) => {
  return (
    <Formik
      initialValues={SignupInitialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Input
          errorPrompt
          name="username"
          label="Username"
          placeholder="user@user.user"
        />
        <Input
          id="input-first-name"
          errorPrompt
          name="firstName"
          label="First Name"
          placeholder="First Name"
        />
        <Input
          id="input-last-name"
          errorPrompt
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
        <Input
          id="input-password"
          errorPrompt
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          autoComplete="off"
        />
        <Input
          id="input-confirm-password"
          errorPrompt
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          autoComplete="off"
        />
        <Checkbox
          id="checkbox-agree-ts"
          fitted
          errorPrompt
          name="agreeTS"
          label={
            <label>
              I agree to <a href="#top">the Terms and Conditions</a>
            </label>
          }
        />
        <FormGroup unstackable>
          <SubmitButton primary fluid loading={isSubmitting} width={8}>
            Submit
          </SubmitButton>
          <ResetButton color="green" fluid width={8}>
            Reset
          </ResetButton>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default RegisterUI;
