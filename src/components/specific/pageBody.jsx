/* React */
import React, { useEffect } from "react";
/* Thorium-UI */
import {
  Block,
  Container,
  useCustomStyles,
  useThemeName,
  useViewportSizeName,
} from "thorium-ui";
/* Custom Components */
import { PageFooter, MetaNav } from "components";
/* Scrollbar Styling */
import "scrollbar/scrollbar.css";

export const PageBody = (props) => {
  const themeName = useThemeName();
  const vpSizeName = useViewportSizeName();
  const cs = useCustomStyles();

  useEffect(() => {
    const hlDark = document.getElementById("hl-dark");
    const hlLight = document.getElementById("hl-light");
    if (themeName === "dark") {
      hlDark.disabled = false;
      hlLight.disabled = true;
    } else if (themeName === "light") {
      hlDark.disabled = true;
      hlLight.disabled = false;
    }
  }, [themeName]);
  return (
    <>
      <Block xs={12} sm={12} md={9} lg={8} xl={8} style={cs.pageBody}>
        <div id="page-top" />
        <Container>{props.children}</Container>
        <PageFooter />
        <div id="page-bottom" />
      </Block>
      {!["xs", "sm", "md"].includes(vpSizeName) && <MetaNav />}
    </>
  );
};

export default PageBody;
