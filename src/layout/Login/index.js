import React from "react";
import { Formik } from "formik";
import {
  Form,
  Input,
  ResetButton,
  SubmitButton,
} from "formik-semantic-ui-react";
import { FormGroup } from "semantic-ui-react";
import SigninSchema, { SigninInitialValues } from "../../utils/SigninSchema";

const LoginUI = ({ isSubmitting, handleSubmit }) => {
  return (
    <Formik
      initialValues={SigninInitialValues}
      validationSchema={SigninSchema}
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
          id="input-password"
          errorPrompt
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          autoComplete="off"
        />

        <FormGroup unstackable>
          <SubmitButton
            primary
            fluid
            loading={isSubmitting}
            width={8}
            disabled={isSubmitting}
          >
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

export default LoginUI;
