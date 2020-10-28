/* React */
import React, { useEffect } from "react";
/* Thorium-UI */
import { Block, Container, useCustomStyles, useThemeName } from "thorium-ui";
/* Custom Components */
import { PageFooter } from "components";
import { Switch, Route } from "react-router-dom";
/* Pages */
import Components from "pages/components";
import General from "pages/general";
import Hooks from "pages/hooks/hooks";
import Error404 from "pages/errors/404";
import Test from "pages/test";
/* Scrollbar Styling */
import "scrollbar/scrollbar.css";

export const PageBody = (props) => {
  // Defines object containing all page content components
  const pages = { ...General, ...Components, Hooks };

  // Create an array to hold all possible routes
  const routes = [];
  for (let key in pages) {
    routes.push({ path: `/${key}`, component: pages[key] });
  }

  // Map each route to a react-router Route
  const renderedRoutes = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  const themeName = useThemeName();

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
        <Container>
          <Switch>
            {renderedRoutes}
            <Route path="/test" exact component={Test} />
            <Route component={Error404} />
          </Switch>
        </Container>
        <PageFooter />
        <div id="page-bottom" />
      </Block>
    </>
  );
};

export default PageBody;
