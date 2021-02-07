import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Menu, Button, Icon, Image } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import logout from "../../context/actions/logout";
import { GlobalContext } from "../../context/Providers";
import isAuthenticated from "../../utils/isAuthenticated";

const Header = ({ setToggle }) => {
  const { pathname } = useLocation();
  const { contactsDispatch } = React.useContext(GlobalContext);

  const history = useHistory();
  const handleUserLogout = () => {
    logout(history)(contactsDispatch);
  };
  return (
    <Menu top attached borderless className="header-menu">
      <Image src={logo} width={60} />
      <Menu.Item className="company-name" as={Link} to="/">
        TrulyContacts
      </Menu.Item>
      <Menu.Item onClick={setToggle}>
        <Icon name="content" />
      </Menu.Item>

      {pathname === "/" && (
        <Menu.Item position="right" className="horcenter">
          <Button basic primary icon as={Link} to="/contacts/create">
            <Icon name="add" /> Create Contact
          </Button>
        </Menu.Item>
      )}
      {isAuthenticated() && (
        <Menu.Item position="right" className="horcenter">
          <Button onClick={handleUserLogout} basic icon color="red">
            <Icon name="log out" /> Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
