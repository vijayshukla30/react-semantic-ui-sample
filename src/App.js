import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Segment, Sidebar } from "semantic-ui-react";
import "./App.scss";
import Header from "./components/Header";
import SideMenu from "./components/Sidebar";
import { GlobalProvider } from "./context/Providers";
import routes from "./routes";
import isAuthenticated from "./utils/isAuthenticated";

const RenderRouter = (route) => {
  const history = useHistory();
  document.title = route.title;
  if (route.authenticated && !isAuthenticated()) {
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

const App = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const toggle = () => setToggleBtn((val) => !val);

  return (
    <GlobalProvider>
      <Router>
        <Header setToggle={toggle} />
        <Sidebar.Pushable as={Segment} style={{ overflow: "hidden" }}>
          <SideMenu toggleBtn={toggleBtn} className="sidebar" />
          <Sidebar.Pusher dimmed={toggleBtn}>
            <Segment basic>
              <Switch>
                {routes.map((route, index) => (
                  <RenderRouter {...route} key={index} />
                ))}
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    </GlobalProvider>
  );
};

export default App;
