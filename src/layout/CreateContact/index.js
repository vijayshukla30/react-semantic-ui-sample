import React from "react";
import { Formik } from "formik";
import { Form, Input, SubmitButton, Select } from "formik-semantic-ui-react";
import { Checkbox, FormGroup } from "semantic-ui-react";
import ContactSchema, {
  ContactInitialValues,
} from "../../utils/CreateContactSchema";
import countries from "../../utils/countries";
const CreateContactUI = ({ handleSubmit, isSubmitting }) => {
  return (
    <Formik
      initialValues={ContactInitialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup unstackable widths={2}>
          <Input
            errorPrompt
            name="firstName"
            label="First Name"
            placeholder="First Name"
            autoComplete="off"
          />
          <Input
            errorPrompt
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup unstackable widths={2}>
          <Select
            id="select-country"
            errorPrompt
            name="country"
            label="Country"
            selectOnBlur={false}
            clearable
            placeholder="Select Your Country"
            options={countries}
          />
          <Input
            errorPrompt
            name="phoneNumber"
            label="Phone Number"
            placeholder="Phone Number"
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          &nbsp;&nbsp;
          <Checkbox
            id="favourite"
            fitted
            errorPrompt
            name="favourite"
            label={<label>Add to Favourite</label>}
          />
        </FormGroup>
        <FormGroup unstackable>
          <SubmitButton primary loading={isSubmitting} disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default CreateContactUI;
