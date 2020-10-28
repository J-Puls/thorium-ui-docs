/* React */
import React from "react";
/* Thorium-UI */
import { Code, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import { HCodeBlock, PageSection, SampleCodeDropdown } from "components";

export const ThemeControlDetails = () => {
  const theme = useTheme();
  const cs = useCustomStyles();

  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <>
      <p style={cs.h1}>Theme Control</p>
      <span style={cs.subheading}>
        Implementing theme-responsive applications is super easy by default!
      </span>

      <PageSection id="default-theme">
        <p style={h2}>Default Theme</p>
        <p>
          <Code>ThoriumRoot</Code> is configured by default to render components
          in the devices current user-preferred theme mode, falling back to{" "}
          <Code>"dark"</Code> if this preference does not exist.
        </p>
        <p>
          To change the fallback theme, set the <Code>defaultTheme</Code> prop
          to
          <Code>"light"</Code>.
        </p>
        <p>
          To force ThoriumRoot to render a specific theme, regardless of user
          preference, add the <Code>overrideSysTheme</Code> prop.
        </p>
        <HCodeBlock language="html">
          {`<ThoriumRoot defaultTheme="light" overrideSysTheme>
  <Container>
    /* YOUR CODE HERE */
  </Container>
</ThoriumRoot>`}
        </HCodeBlock>
      </PageSection>

      <PageSection id="accessing-the-theme">
        <p style={h2}>Accessing the Theme</p>
        <p>
          To access the current theme data within any component, simply employ
          the <Code>useTheme</Code> hook.
        </p>
        <SampleCodeDropdown>
          <HCodeBlock language="javascript">
            {`import React from "react";
import { useTheme } from "thorium-ui";

  const MyComponent = (props) => {
    const theme = useTheme();
    return (<div>{theme.name}</div>)
  }
export default MyComponent`}
          </HCodeBlock>
        </SampleCodeDropdown>
        <p>
          Alternately, the current theme can be accessed via{" "}
          <Code>ThoriumContext</Code> or <Code>ThoriumConsumer</Code> for
          class-based components.
        </p>
        <SampleCodeDropdown>
          <HCodeBlock language="javascript">
            {`import React from "react";
import { ThoriumContext } from "thorium-ui";

class MyComponent extends React.Component {
  render(){
    const context = React.useContext(ThoriumContext);
    return (<div>{context.theme.name}</div>)
  }
}
export default MyComponent`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="toggling-the-theme">
        <p style={h2}>Toggling the Theme</p>
        <h3>ThemeToggle component:</h3>
        <p>
          Using the <Code>ThemeToggle</Code> component, you can quickly toggle
          between <Code>dark</Code> and <Code>light</Code> themes.
        </p>
        <SampleCodeDropdown>
          <HCodeBlock language="javascript">
            {`import React from "react";
import { ThemeToggle } from "thorium-ui";

const MyComponent = (props) => (
  <div>
    <ThemeToggle />
  </div>
)
            
export default MyComponent`}
          </HCodeBlock>
        </SampleCodeDropdown>
        <h3>Custom Implementation</h3>
        <p>
          Alternately, the <Code>toggleTheme</Code> function within{" "}
          <Code>ThoriumContext</Code> can be called from within any other
          component. This can be useful if you would like to toggle the theme as
          a side effect of some other parameter.
        </p>
        <SampleCodeDropdown>
          <HCodeBlock language="javascript">
            {`import React from "react";
import { ThoriumContext } from "thorium-ui";

const MyToggleComponent = (props) => {
  const context = React.useContext(ThoriumContext);
  return <button onClick={context.toggleTheme()}>Click Me!</button>
}
export default MyToggleComponent`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>
    </>
  );
};
export default ThemeControlDetails;
