/* React */
import React from "react";
/* Thorium-UI */
import {
  Code,
  Layer,
  useCustomStyles,
  useTheme,
  useThemeName,
} from "thorium-ui";
/* Custom Components */
import { HCodeBlock, PageBody, PageSection } from "components";

export const GettingStartedDetails = () => {
  const themeName = useThemeName();
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };

  return (
    <PageBody>
      <PageSection>
        <Layer justify="center" style={{ marginTop: "3rem" }}>
          <img
            src="https://i.ibb.co/6y2RSZf/banner.png"
            alt="thorium logo"
            width="100%"
            style={{
              filter: themeName === "light" ? "invert(100%)" : null,
            }}
          />
        </Layer>
        <p style={{ ...cs.subheading, textAlign: "center" }}>
          An intuitive React.js framework with which to quickly build themed
          applications, without needing a ton of CSS clutter.
        </p>
      </PageSection>

      <p style={cs.h1}>Getting Started</p>
      <span style={cs.subheading}>
        Use the following instructions to get up and running with Thorium-UI.
      </span>
      <PageSection id="installation">
        <p style={h2}>Installation</p>
        <HCodeBlock>{`npm i thorium-ui`}</HCodeBlock>
      </PageSection>
      <PageSection id="using-thoriumRoot">
        <p style={h2}>Using ThoriumRoot</p>
        <p>
          Once you've included <Code>Thorium-UI</Code> in your project, some
          very minimal boilerplate is needed to get up and running.
        </p>
        <ol>
          <li>
            In your App.jsx file, begin by importing the{" "}
            <Code>ThoriumRoot</Code> component from <Code>thorium-ui</Code>.
          </li>
          <li>
            Wrap the <Code>ThoriumRoot</Code> around the rest of your App
            contents.
          </li>
          <li>
            <i>(optional)</i> If you're using <Code>customThemes</Code> or{" "}
            <Code>customStyles</Code>, import them at the top of your{" "}
            <Code>App.jsx</Code> file, and pass them as corresponding props to{" "}
            <Code>ThoriumRoot</Code>.
          </li>
        </ol>
        <p>
          Your <Code>App.jsx</Code> file should look like the following.
        </p>

        <HCodeBlock language="javascript">
          {`import React from "react";
import { ThoriumRoot } from "thorium-ui";
import customStyles from "./customStyles.js";
import customThemes from "./customThemes.js";

export const App = (props) => {
  return (
    <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
      /* YOUR COMPONENTS HERE */
    </ThoriumRoot>
  );
}
export default App;`}
        </HCodeBlock>
      </PageSection>

      <p style={{ ...cs.h1, textAlign: "center" }}>Thats it!</p>
      <p style={{ ...cs.subheading, textAlign: "center" }}>
        With that finished, you're now ready to begin using Thorium-UI!
      </p>
    </PageBody>
  );
};
