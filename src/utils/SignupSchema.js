import * as Yup from "yup";
export const SignupInitialValues = {
  username: "",
  firstName: "",
  lastName: "",
  password: "",
  confirm_password: "",
  agreeTS: false,
};
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Must be 20 characters or less")
    .required("Required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Must be 30 characters or less")
    .required("Required"),

  username: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Password Confirm is required"),
  agreeTS: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

export default SignupSchema;
