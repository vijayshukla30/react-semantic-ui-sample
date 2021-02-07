import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Sidebar, Ref } from "semantic-ui-react";
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
  const segmentRef = React.useRef();
  const [toggleBtn, setToggleBtn] = useState(false);
  const toggle = () => setToggleBtn((val) => !val);

  return (
    <GlobalProvider>
      <Router>
        <Header setToggle={toggle} />
        <Sidebar.Pushable as={Segment} className="header-segment">
          <SideMenu
            toggleBtn={toggleBtn}
            className="sidebar"
            segmentRef={segmentRef}
            onHide={() => setToggleBtn(false)}
          />
          <Ref innerRef={segmentRef}>
            <Segment basic>
              <Switch>
                {routes.map((route, index) => (
                  <RenderRouter {...route} key={index} />
                ))}
              </Switch>
            </Segment>
          </Ref>
        </Sidebar.Pushable>
      </Router>
    </GlobalProvider>
  );
};

export default App;
