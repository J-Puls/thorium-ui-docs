import React from "react";
import { Dropdown, Block, Nav } from "thorium-ui";
import { generalLinks, componentLinks } from "pages";

export const MobileMenu = React.forwardRef((props, ref) => {
  const mapToLinks = (arr) => {
    return arr.map(({ text, route }, key) => (
      <Nav.Link to={route} key={key} navkey={route}>
        {text}
      </Nav.Link>
    ));
  };

  return (
    <Block all={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Dropdown
        scrollable
        height="calc(100vh - 75px)"
        triggerType="click"
        remoteTrigger
        targetID="mobileMenu"
        triggerID="mobileMenuBtn"
        ref={ref}
        toggleBurger={props.toggleBurger}
        collapseOnClick
        style={{ paddingBottom: "3rem" }}
      >
        <Nav
          vertical
          trackActive
          activeByURL
          defaultActive={window.location.pathname}
          centerLinks
          variant="primary"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Dropdown.Divider label="Basics" />
          {mapToLinks(generalLinks)}
          <Dropdown.Divider label="Components" />
          {mapToLinks(componentLinks)}
        </Nav>
      </Dropdown>
    </Block>
  );
});

export default MobileMenu;
