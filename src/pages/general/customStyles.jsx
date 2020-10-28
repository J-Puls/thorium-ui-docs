/* React */
import React from "react";
/* Thorium-UI */
import { Code, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import { HCodeBlock, PageSection } from "components";

export const CustomStylesDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  return (
    <>
      <h1 style={cs.h1}>Custom Styles</h1>
      <p style={cs.subheading}>
        Thorium-UI is designed at its core to operate completely without
        stylesheets. While traditional CSS can still be used normally,
        Thorium-UI offers a pure JavaScript approach to styling.
      </p>

      <PageSection id="thorium-ui-approach">
        <h2 style={cs.h2}>The Thorium-UI Approach</h2>
        <p>
          Traditionally, the <Code>class</Code> attribute (or the{" "}
          <Code>className</Code> prop in <Code>React</Code>) is used to identify
          elements which share the same styling properties.
        </p>
        <p>
          Thorium-UI uses a very similar concept, however all styling data is
          defined within JavaScript objects, available anywhere within{" "}
          <Code>ThoriumRoot</Code> via a custom Hook, and programmatically
          inserted inline during the render process via the <Code>style</Code>{" "}
          prop.
        </p>
        <p>
          Custom styling definitions are defined within a{" "}
          <Code>customStyles.js</Code> file in the <Code>/src</Code> directory.
        </p>
      </PageSection>

      <PageSection id="functional-styling">
        <p style={cs.h2}>Functional customStyles</p>
        <p style={cs.subheading}>
          The standard method for defining a <Code>customStyles</Code> object is
          to generate it dynamically using a function.
        </p>
        <h3 style={cs.h3}>How It Works</h3>
        <ol>
          <li>
            Begin by creating a <Code>customStyles.js</Code> file within the
            source directory of your project
          </li>
          <li>
            Define and export a function named <Code>customStyles</Code> that
            takes two parameters:
            <ul>
              <li>
                <Code>theme</Code> will be the currently active theme
              </li>
              <li>
                <Code>colors</Code> will be the full color palette for both
                themes
              </li>
            </ul>
          </li>
          <li>
            From this function, return an object containing definitions for the
            "classes" you wish to use, using either React or CSS style
            formatting.
          </li>
        </ol>
        <p style={{ ...cs.h3, color: theme.colors.danger }}>NOTE:</p>
        <p>
          Any styling of the HTML <Code>body</Code> element must be done in
          standard CSS format as it will not be parsed by React.
        </p>
        <p style={cs.h3}>Example</p>
        <HCodeBlock language="javascript">
          {`export const customStyles = (theme, colors) => ({
  // CSS Format
  body: {
    overflow: "hidden",
    "font-size": "16px",
    "font-family": "'Open Sans', 'Roboto', 'Montserrat', 'Arial', sans-serif",
  },
  // React Format
  myComponent: {
    fontSize: "20pt",
    padding: "1rem 2rem",
    height: "100px"
    }
})`}
        </HCodeBlock>
      </PageSection>

      <PageSection id="accessing-customStyles">
        <p style={cs.h2}>Accessing customStyles</p>
        <p style={cs.subheading}>
          The <Code>customStyles</Code> object can be accessed from any
          component within <Code>ThoriumRoot</Code> in one of two ways:
        </p>
        <p style={cs.h3}>The useCustomStyles Hook</p>
        <p>
          Thorium-UI includes a built-in <Code>Hook</Code> to easily access the{" "}
          <Code>customStyles</Code> object from any functional component.
        </p>
        <HCodeBlock language="javascript">
          {`import React from "react";
import { useCustomStyles } from "thorium-ui";

const MyComponent = (props) => {
  const customStyles = useCustomStyles();

  return (
    <div style={customStyles.myComponent}>
      {props.children}
    </div>
  );
}
export default MyComponent;`}
        </HCodeBlock>
        <p style={cs.h3}>ThoriumContext / ThoriumConsumer</p>
        <p>
          For traditional class-based components, <Code>customStyles</Code> can
          be accessed via <Code>ThoriumContext</Code> or{" "}
          <Code>ThoriumConsumer</Code>.
        </p>

        <HCodeBlock language="javascript">
          {`import React from "react";
import { ThoriumConsumer } from "thorium-ui";

class MyComponent extends React.Component {
render(){
  return (
    <ThoriumConsumer>
    {context => {
      const customStyles = context.customStyles;
      return (<div style={customStyles.myComponent}>
        {this.props.children}
      </div>)
    }}
    </ThoriumConsumer>
  );
}

export default MyComponent;`}
        </HCodeBlock>
      </PageSection>
    </>
  );
};
export default CustomStylesDetails;
