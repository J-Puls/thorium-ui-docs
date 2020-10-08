import React from "react";
import { Nav, ThoriumConsumer } from "thorium-ui";
import { generalLinks, componentLinks } from "pages";

const mapToLinks = (arr) => {
  return arr.map(({ text, route }, key) => (
    <Nav.Link to={route} key={key} navkey={route}>
      <span style={{ paddingLeft: "1rem" }}>{text}</span>
    </Nav.Link>
  ));
};

export const SideMenu = () => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      const sideMenu = { ...cs.sideMenu, ...context.theme.sideMenu };
      return (
        <Nav
          md={2}
          lg={2}
          xl={1}
          style={sideMenu}
          vertical
          trackActive
          activeByURL
          defaultActive={window.location.pathname}
          variant="primary"
        >
          <h3 style={cs.navh3} key={"Basics"}>
            Basics
          </h3>
          {mapToLinks(generalLinks)}

          <h3 style={cs.navh3} key={"Components"}>
            Components
          </h3>
          {mapToLinks(componentLinks)}
        </Nav>
      );
    }}
  </ThoriumConsumer>
);

export default SideMenu;
