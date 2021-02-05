import React from "react";
import { Menu, Image } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <Menu secondary>
      <Image src={logo} width={60} />
      <Menu.Item>TrulyContact</Menu.Item>
      <Menu.Item position="right">Create Contace</Menu.Item>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );
};

export default Header;
