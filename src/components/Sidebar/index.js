import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const SideMenu = ({ toggleBtn }) => {
  return (
    <Sidebar
      as={Menu}
      animation="push"
      vertical
      visible={toggleBtn}
      direction="left"
      icon="labeled"
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
  );
};

export default SideMenu;
