import Contact from "../containers/Contact";
import CreateContact from "../containers/CreateContact";
import Login from "../containers/Login";
import Register from "../containers/Register";

const routes = [
  {
    path: "/auth/register",
    component: Register,
    title: "Register",
  },
  {
    path: "/auth/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/",
    component: Contact,
    title: "Contact",
  },
  {
    path: "/contacts/create",
    component: CreateContact,
    title: "Create Contact",
  },
];

export default routes;
