/* React */
import React from "react";
/* Thorium-UI */
import {
  Dropdown,
  Nav,
  useCustomStyles,
  useViewportSizeName,
} from "thorium-ui";
/* Links */
import { componentLinks, generalLinks } from "pages";

export const MobileMenu = React.forwardRef((props, ref) => {
  const vpSizeName = useViewportSizeName();
  const cs = useCustomStyles();

  // Only process and render component if viewport is smaller than "md"
  if (!["xs", "sm"].includes(vpSizeName)) return <></>;

  const mapToLinks = (arr) => {
    return arr.map(({ text, route }, key) => (
      <Nav.Link to={route} key={key} navkey={route}>
        {text}
      </Nav.Link>
    ));
  };

  return (
    <Dropdown
      triggerType="click"
      remoteTrigger
      targetID="mobileMenu"
      triggerID="mobileMenuBtn"
      onToggle={props.onToggle}
      toggleBurger={props.toggleBurger}
      collapseOnClick
      containerStyle={{
        height: props.isOpen ? "100%" : 0,
        overflow: "auto",
      }}
      menuStyle={{
        maxHeight: "calc(100vh - 100px)",
        overflow: "auto",
      }}
    >
      <Nav
        vertical
        trackActive
        activeByURL
        defaultActive={window.location.pathname}
        centerLinks
        variant="primary"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: "2em",
        }}
      >
        <details open>
          <summary style={{ ...cs.navSummary, textAlign: "start" }}>
            Basics
          </summary>
          {mapToLinks(generalLinks)}
        </details>
        <details open>
          <summary style={{ ...cs.navSummary, textAlign: "start" }}>
            Components
          </summary>
          {mapToLinks(componentLinks)}
        </details>
        <details>
          <summary style={{ ...cs.navSummary, textAlign: "start" }}>
            API
          </summary>
          <Nav.Link to="/hooks" key={"hooks"} navkey={"/hooks"}>
            Hooks
          </Nav.Link>
        </details>
      </Nav>
    </Dropdown>
  );
});

export default MobileMenu;
