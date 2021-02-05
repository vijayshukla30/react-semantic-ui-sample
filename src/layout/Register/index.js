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
import { FormGroup, Label } from "semantic-ui-react";

const RegisterUI = ({ isSubmitting, handleSubmit, onReset, fieldErrors }) => {
  return (
    <Formik
      initialValues={SignupInitialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
      onReset={onReset}
    >
      <Form>
        <Input
          errorPrompt
          name="username"
          label="Username"
          placeholder="user@user.user"
        />
        {fieldErrors.username && (
          <Label basic pointing prompt>
            {fieldErrors.username}
          </Label>
        )}
        <Input
          id="input-first-name"
          errorPrompt
          name="firstName"
          label="First Name"
          placeholder="First Name"
        />
        {fieldErrors.first_name && (
          <Label basic pointing prompt>
            {fieldErrors.first_name}
          </Label>
        )}
        <Input
          id="input-last-name"
          errorPrompt
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
        {fieldErrors.last_name && (
          <Label basic pointing prompt>
            {fieldErrors.last_name}
          </Label>
        )}
        <Input
          id="input-password"
          errorPrompt
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          autoComplete="off"
        />
        {fieldErrors.password && (
          <Label basic pointing prompt>
            {fieldErrors.password}
          </Label>
        )}
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
        {fieldErrors.agreeTS && (
          <Label basic pointing prompt>
            {fieldErrors.agreeTS}
          </Label>
        )}
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

export default RegisterUI;
