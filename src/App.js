import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import { GlobalProvider } from "./context/Providers";
import routes from "./routes";
import isAuthenticated from "./utils/isAuthenticated";

const RenderRouter = (route) => {
  const history = useHistory();

  document.title = route.title;

  if (route.authenticated && !isAuthenticated()) {
    console.log("redirect ");
    history.push("/auth/login");
  }
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    />
  );
};

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RenderRouter {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
