import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Icon, Menu, Sidebar } from "semantic-ui-react";

const SideMenu = ({ toggleBtn, segmentRef, onHide }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
    <Sidebar
      as={Menu}
      animation="push"
      vertical
      visible={toggleBtn}
      direction="left"
      target={segmentRef}
      onHide={onHide}
    >
      <Menu.Item as={Link} to="/">
        {/* <Icon.Group> */}
        <Icon name="home" />
        {/* </Icon.Group> */}
        Home
      </Menu.Item>
      <Menu.Item as={Accordion}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          Contacts
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Menu.Item as={Link} to="/">
            <Icon name="users" />
            List
          </Menu.Item>
          <Menu.Item as={Link} to="/contacts/create">
            <Icon name="user plus" />
            Add
          </Menu.Item>
        </Accordion.Content>
      </Menu.Item>
    </Sidebar>
  );
};

export default SideMenu;
