/* React */
import React from "react";
/* Thorium-UI */
import { Button, Checkbox, Nav } from "thorium-ui";

export const orientation = {
  normal: (
    <Nav justify="evenly" centerLinks style={{ border: "1px solid gray" }}>
      <Nav.Item navkey={0}>Item 1</Nav.Item>
      <Nav.Item navkey={1}>Item 2</Nav.Item>
      <Nav.Item navkey={2}>Item 3</Nav.Item>
    </Nav>
  ),
  vertical: (
    <Nav vertical centerLinks style={{ border: "1px solid gray" }}>
      <Nav.Item navkey={0}>Item 1</Nav.Item>
      <Nav.Item navkey={1}>Item 2</Nav.Item>
      <Nav.Item navkey={2}>Item 3</Nav.Item>
    </Nav>
  ),
};

export const activeItem = (
  <Nav justify="evenly" trackActive defaultActive={1} centerLinks>
    <Nav.Item navkey={0}>Item 1</Nav.Item>
    <Nav.Item navkey={1}>Item 2</Nav.Item>
    <Nav.Item navkey={2}>Item 3</Nav.Item>
  </Nav>
);

export const variants = {
  link: (
    <Nav variant="link" justify="center" centerLinks>
      <Nav.Item navkey={0}>Link</Nav.Item>
      <Nav.Item navkey={1}>Link</Nav.Item>
      <Nav.Item navkey={2}>Link</Nav.Item>
    </Nav>
  ),
  primary: (
    <Nav variant="primary" justify="center" centerLinks>
      <Nav.Item navkey={0}>Primary</Nav.Item>
      <Nav.Item navkey={1}>Primary</Nav.Item>
      <Nav.Item navkey={2}>Primary</Nav.Item>
    </Nav>
  ),
  secondary: (
    <Nav variant="secondary" justify="center" centerLinks>
      <Nav.Item navkey={0}>Secondary</Nav.Item>
      <Nav.Item navkey={1}>Secondary</Nav.Item>
      <Nav.Item navkey={2}>Secondary</Nav.Item>
    </Nav>
  ),
  success: (
    <Nav variant="success" justify="center" centerLinks>
      <Nav.Item navkey={0}>Success</Nav.Item>
      <Nav.Item navkey={1}>Success</Nav.Item>
      <Nav.Item navkey={2}>Success</Nav.Item>
    </Nav>
  ),
  warning: (
    <Nav variant="warning" justify="center" centerLinks>
      <Nav.Item navkey={0}>Warning</Nav.Item>
      <Nav.Item navkey={1}>Warning</Nav.Item>
      <Nav.Item navkey={2}>Warning</Nav.Item>
    </Nav>
  ),
  danger: (
    <Nav variant="danger" justify="center" centerLinks>
      <Nav.Item navkey={0}>Danger</Nav.Item>
      <Nav.Item navkey={1}>Danger</Nav.Item>
      <Nav.Item navkey={2}>Danger</Nav.Item>
    </Nav>
  ),
  light: (
    <Nav variant="light" justify="center" centerLinks>
      <Nav.Item navkey={0}>Light</Nav.Item>
      <Nav.Item navkey={1}>Light</Nav.Item>
      <Nav.Item navkey={2}>Light</Nav.Item>
    </Nav>
  ),
  dark: (
    <Nav variant="dark" justify="center" centerLinks>
      <Nav.Item navkey={0}>Dark</Nav.Item>
      <Nav.Item navkey={1}>Dark</Nav.Item>
      <Nav.Item navkey={2}>Dark</Nav.Item>
    </Nav>
  ),
};

export const type = {
  normal: (
    <Nav justify="center" variant="primary" centerLinks>
      <Nav.Item navkey={0}>Item 1</Nav.Item>
      <Nav.Item navkey={1}>Item 2</Nav.Item>
      <Nav.Item navkey={2}>Item 3</Nav.Item>
    </Nav>
  ),
  pills: (
    <Nav type="pills" justify="center" variant="primary" centerLinks>
      <Nav.Item navkey={0}>Pill 1</Nav.Item>
      <Nav.Item navkey={1}>Pill 2</Nav.Item>
      <Nav.Item navkey={2}>Pill 3</Nav.Item>
    </Nav>
  ),
  tabs: (
    <Nav type="tabs" justify="center" variant="primary" centerLinks>
      <Nav.Item navkey={0}>Tab 1</Nav.Item>
      <Nav.Item navkey={1}>Tab 2</Nav.Item>
      <Nav.Item navkey={2}>Tab 3</Nav.Item>
    </Nav>
  ),
};
export const otherComponents = (
  <Nav justify="evenly" centerLinks>
    <Nav.Link to="#" navkey={0}>
      NavLink
    </Nav.Link>
    <Nav.Item navkey={1}>
      <Button>Button</Button>
    </Nav.Item>
    <Nav.Item navkey={2}>
      <Checkbox rounded defaultChecked size="lg" />
    </Nav.Item>
  </Nav>
);

export const navExamples = {
  activeItem,
  orientation,
  otherComponents,
  type,
  variants,
};

export default navExamples;
