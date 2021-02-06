import * as Yup from "yup";
import countries from "../utils/countries.js";
export const ContactInitialValues = {
  firstName: "",
  lastName: "",
  country: "",
  phoneNumber: "",
  favourite: false,
};
const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  country: Yup.string()
    .oneOf(countries.map((c) => c.value))
    .required("Required"),
  favourite: Yup.boolean(),
});

export default ContactSchema;
