import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import routes from "./routes";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
