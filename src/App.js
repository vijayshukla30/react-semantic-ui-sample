import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import { GlobalProvider } from "./context/Providers";
import routes from "./routes";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
