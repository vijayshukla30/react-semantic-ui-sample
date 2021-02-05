import React from "react";
import { Form } from "semantic-ui-react";

const SemanticFormikInputField = (props) => {
  const {
    field: { name },
    form: { setFieldValue },
    label,
    placeholder,
    type,
  } = props;
  return (
    <Form.Field>
      <Form.Input
        type={type}
        label={label}
        placeholder={placeholder}
        onChange={(event) => {
          setFieldValue(name, event.target.value);
        }}
      />
    </Form.Field>
  );
};

export default SemanticFormikInputField;
