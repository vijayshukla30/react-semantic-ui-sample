import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import logout from "../../context/actions/logout";
import { GlobalContext } from "../../context/Providers";

const Header = () => {
  const { pathname } = useLocation();
  const { contactsDispatch } = React.useContext(GlobalContext);

  const history = useHistory();
  const handleUserLogout = () => {
    logout(history)(contactsDispatch);
  };
  return (
    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item className="company-name" as={Link} to="/">
        TrulyContacts
      </Menu.Item>

      {pathname === "/" && (
        <Menu.Item position="right" className="horcenter">
          <Button basic primary icon as={Link} to="/contacts/create">
            <Icon name="add" /> Create Contact
          </Button>
        </Menu.Item>
      )}
      {pathname === "/" && (
        <Menu.Item className="horcenter">
          <Button onClick={handleUserLogout} basic icon color="red">
            <Icon name="log out" /> Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
