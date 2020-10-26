/* React */
import React from "react";
/* Thorium-UI */
import { ThoriumRoot, Layer } from "thorium-ui";
/* Customization */
import customStyles from "./customStyles";
import customThemes from "./customThemes";
/* React-Router */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Custom Components */
import { TopNav, SideMenu } from "components";
/* Pages */
import Components from "pages/components";
import General from "pages/general";
import Error404 from "pages/errors/404";
import Hooks from "pages/hooks/hooks";
import Test from "pages/test";

export const App = () => {
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

  return (
    <ThoriumRoot
      overrideSysTheme
      defaultTheme="dark"
      enableReactRouter
      customStyles={customStyles}
      customThemes={customThemes}
    >
      <Router>
        <TopNav />
        <Layer style={{ marginLeft: 0, marginRight: 0 }}>
          <SideMenu />
          <Switch>
            {renderedRoutes}
            <Route path="/test" exact component={Test} />
            <Route component={Error404} />
          </Switch>
        </Layer>
      </Router>
    </ThoriumRoot>
  );
};
export default App;
