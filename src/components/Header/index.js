import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, Button, Icon, Image, Popup } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import logout from "../../context/actions/logout";
import { GlobalContext } from "../../context/Providers";
import isAuthenticated from "../../utils/isAuthenticated";

const Header = ({ setToggle }) => {
  const { contactsDispatch } = React.useContext(GlobalContext);

  const history = useHistory();
  const handleUserLogout = () => {
    logout(history)(contactsDispatch);
  };
  return (
    <Menu top attached borderless className="header-menu">
      <Image src={logo} width={50} />
      <Menu.Item className="company-name" as={Link} to="/">
        TrulyContacts
      </Menu.Item>
      <Menu.Item onClick={setToggle}>
        <Icon name="content" />
      </Menu.Item>

      {isAuthenticated() && (
        <Menu.Item position="right" className="horcenter">
          <Popup
            content="Logout"
            trigger={
              <Button onClick={handleUserLogout} basic icon color="red">
                <Icon name="log out" />
              </Button>
            }
            position="left center"
            size="tiny"
          />
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
