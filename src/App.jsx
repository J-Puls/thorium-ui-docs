/* React */
import React from "react";
/* react-router */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Thorium-UI */
import { ThoriumRoot } from "thorium-ui";
/* Custom components */
import { TopNav } from "components";

/* Page content components */
import components from "pages/components";
import general from "pages/general";
import Error404 from "pages/errors/404";
import test from "pages/test";
import customStyles from "./customStyles";
import customThemes from "./customThemes";

export const App = () => {
  // Defines object containing all page content components
  const pages = { ...general, ...components };

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
      customTheme={customThemes}
    >
      <Router>
        <TopNav />
        <Switch>
          {renderedRoutes}
          <Route path="/test" exact component={test} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </ThoriumRoot>
  );
};
export default App;
