/* React */
import React from "react";
/* React-Router */
import { useLocation } from "react-router";
/* Thorium-UI */
import {
  Nav,
  useCustomStyles,
  useTheme,
  useViewportSizeName,
} from "thorium-ui";
/* Page Anchors */
import { anchors } from "../../pages/anchors";

export const MetaNav = () => {
  const theme = useTheme();
  const cs = useCustomStyles();
  const vpSizeName = useViewportSizeName();
  const location = useLocation();

  // Only process and render component if viewport is larger than "md"
  if (!["lg", "xl"].includes(vpSizeName)) return <></>;

  const scrollToHash = (hash) => {
    document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
  };
  // Generates NavLinks if an anchor list is found, else returns nothing
  const metaLinks = anchors[location.pathname]
    ? anchors[location.pathname].map((a) => (
        <Nav.Link
          asAnchor
          key={a.anchorName}
          navkey={a.anchorName}
          onClick={() => scrollToHash(`${a.anchorName}`)}
        >
          {a.text}
        </Nav.Link>
      ))
    : null;

  return (
    <Nav vertical style={{ ...cs.metaNav, ...theme.metaNav }} variant="link">
      {metaLinks}
    </Nav>
  );
};

export default MetaNav;
