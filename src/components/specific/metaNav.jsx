/* React */
import React, { useEffect, useState } from "react";
/* Thorium-UI */
import {
  Block,
  Nav,
  useCustomStyles,
  useTheme,
  useViewportSizeName,
} from "thorium-ui";
/* React-Router */
import { useHistory } from "react-router";
/* Page Anchors */
import { anchors } from "../../pages/anchors";

export const MetaNav = (props) => {
  const theme = useTheme();
  const cs = useCustomStyles();
  const vpSizeName = useViewportSizeName();
  const history = useHistory();
  const [location, setLocation] = useState(history.location.pathname);
  useEffect(() => {
    setLocation(history.location.pathname);
  }, [history.location.pathname]);

  const scrollToHash = (hash) => {
    document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
  };

  const metaLinks = anchors[location] ? (
    anchors[location].map((a) => (
      <Nav.Link
        asAnchor
        key={a.anchorName}
        navkey={a.anchorName}
        onClick={() => scrollToHash(`${a.anchorName}`)}
      >
        {a.text}
      </Nav.Link>
    ))
  ) : (
    <></>
  );

  return ["lg", "xl"].includes(vpSizeName) ? (
    <Block lg={2} xl={2} vertical style={{ ...cs.metaNav, ...theme.metaNav }}>
      <details open>
        <summary style={{ cursor: "default" }}>On This Page</summary>
        <Nav vertical variant="link">
          <Nav.Link
            asAnchor
            navkey="page-top"
            key={"page-top"}
            onClick={() => scrollToHash("page-top")}
          >
            - Top -
          </Nav.Link>
          {metaLinks}
          <Nav.Link
            asAnchor
            navkey="page-bottom"
            key={"page-bottom"}
            onClick={() => scrollToHash("page-bottom")}
          >
            - Bottom -
          </Nav.Link>
        </Nav>
      </details>
    </Block>
  ) : (
    <></>
  );
};

export default MetaNav;
