/* React */
import React from "react";
/* Thorium-UI */
import {
  Nav,
  useCustomStyles,
  useTheme,
  useViewportSizeName,
} from "thorium-ui";
/* Links */
import { componentLinks, generalLinks } from "pages";

const mapToLinks = (arr) => {
  return arr.map(({ text, route }, key) => (
    <Nav.Link to={route} key={key} navkey={route}>
      <span style={{ paddingLeft: "1rem" }}>{text}</span>
    </Nav.Link>
  ));
};

export const SideMenu = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const vpSizeName = useViewportSizeName();

  const style = { ...cs.sideMenu, ...theme.sideMenu };
  return !["xs", "sm"].includes(vpSizeName) ? (
    <Nav
      activeByURL
      defaultActive={window.location.pathname}
      trackActive
      variant="primary"
      vertical
      md={3}
      lg={2}
      xl={2}
      style={style}
    >
      <details key={"Basics"} open>
        <summary style={cs.navSummary}>
          <span>Basics</span>
        </summary>
        {mapToLinks(generalLinks)}
      </details>
      <details key={"Components"}>
        <summary style={cs.navSummary}>
          <span>Components</span>
        </summary>
        {mapToLinks(componentLinks)}
      </details>
      <details key={"API"}>
        <summary style={cs.navSummary}>
          <span>API</span>
        </summary>
        <Nav.Link to={"/hooks"} key={"hooks"} navkey={"/hooks"}>
          <span style={{ paddingLeft: "1rem" }}>Hooks</span>
        </Nav.Link>
      </details>
    </Nav>
  ) : (
    <></>
  );
};

export default SideMenu;
