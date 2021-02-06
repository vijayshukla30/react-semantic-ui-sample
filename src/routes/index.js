import Contact from "../containers/Contact";
import CreateContact from "../containers/CreateContact";
import Login from "../containers/Login";
import Register from "../containers/Register";

const routes = [
  {
    path: "/auth/register",
    component: Register,
    title: "Register",
    authenticated: false,
  },
  {
    path: "/auth/login",
    component: Login,
    title: "Login",
    authenticated: false,
  },
  {
    path: "/",
    component: Contact,
    title: "Contact",
    authenticated: true,
  },
  {
    path: "/contacts/create",
    component: CreateContact,
    title: "Create Contact",
    authenticated: true,
  },
];

export default routes;
