// React
import React, { useEffect, useContext } from "react";
// Thorium components
import { Block, Layer, ThoriumContext } from "thorium-ui";

// Custom components
import { SideMenu, PageFooter } from "components";
// Custom scrollbar styling
import "scollbar/scrollbar.css";
import { useHistory } from "react-router";

export const PageBody = (props) => {
  const context = useContext(ThoriumContext);
  let pageBody;
  const history = useHistory();
  let VpSizeName = context.viewportSizeName;
  const style = context.customStyles.pageBody;

  useEffect(() => {
    // pageBody.scrollTo(0, 0);
  }, [history.location, pageBody]);
  useEffect(() => {
    const name = context.theme.name;
    const hlDark = document.getElementById("hl-dark");
    const hlLight = document.getElementById("hl-light");
    if (name === "dark") {
      hlDark.disabled = false;
      hlLight.disabled = true;
    } else if (name === "light") {
      hlDark.disabled = true;
      hlLight.disabled = false;
    }
  }, [context.theme.name]);
  return (
    <Layer ref={(el) => (pageBody = el)} style={style}>
      {["xs", "sm"].includes(VpSizeName) && (
        <Block all={12}>
          {props.children}
          <hr style={{ marginTop: "4rem" }} />
          <PageFooter />
        </Block>
      )}
      {!["xs", "sm"].includes(VpSizeName) && (
        <>
          <SideMenu />
          <Block md={8} lg={8} xl={7} style={{ marginLeft: "25%" }}>
            {props.children}
            <hr style={{ marginTop: "4rem" }} />
            <PageFooter />
          </Block>
        </>
      )}
    </Layer>
  );
};

export default PageBody;
