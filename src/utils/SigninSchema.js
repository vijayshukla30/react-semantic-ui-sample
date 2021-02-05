import * as Yup from "yup";
export const SigninInitialValues = {
  username: "",
  password: "",
};
const SigninSchema = Yup.object().shape({
  username: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

export default SigninSchema;
