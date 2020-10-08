import React from "react";
import { Code, Link, ThoriumConsumer } from "thorium-ui";
import { HCodeBlock, SampleCodeDropdown, PageBody } from "components";

export const ThemeControlDetails = () => {
  return (
    <ThoriumConsumer>
      {(context) => {
        const cs = context.customStyles;
        const h2 = { ...cs.h2, ...context.theme.h2 };
        return (
          <PageBody>
            <p style={cs.h1}>Theme Control</p>
            <span style={cs.subheading}>
              Implementing theme-responsive applications is super easy by
              default!
            </span>
            <p style={h2}>Default Theme</p>
            <p>
              <Code>ThoriumRoot</Code> is configured by default to render
              components in the devices current OS theme mode (<Code>dark</Code>{" "}
              or <Code>light</Code>), falling back to <Code>dark</Code> if this
              preferrence does not exist.
            </p>
            <p>
              To change the fallback theme, set the <Code>defaultTheme</Code>{" "}
              prop to "light".
            </p>
            <p>
              To force ThoriumRoot to render a specific theme, regardless of OS
              preference, add the <Code>overrideSysTheme</Code> prop.
            </p>
            <HCodeBlock language="html">
              {`<ThoriumRoot defaultTheme="light" overrideSysTheme>\n` +
                `   <Container>\n` +
                `     /* YOUR CODE HERE */\n` +
                `   </Container>\n` +
                `</ThoriumRoot>`}
            </HCodeBlock>
            <p style={h2}>Accessing the Theme</p>
            <p>
              To access the current theme's data within any component, you
              simply need to access the built-in <Code>ThoriumContext</Code>{" "}
              object via the React Context API.
            </p>
            <HCodeBlock langauge="javascript">
              {`import React from "react";\n` +
                `import { ThoriumContext } from "thorium-ui";\n\n` +
                `const MyComponent = (props) => {\n` +
                `   const context = React.useContext(ThoriumContext);\n` +
                `   return (<div>{context.theme.name}</div>)\n` +
                `}\n` +
                `export default MyComponent`}
            </HCodeBlock>
            <p style={h2}>Toggling the Theme</p>
            <p>
              There are two basic ways to quickly switch between{" "}
              <Code>dark</Code> and <Code>light</Code> themes.
            </p>
            <h3>ThemeToggle:</h3>
            <p>
              The easiest way to accomplish this is by implementing the{" "}
              <Link to="/themeToggle" asLink>
                ThemeToggle
              </Link>{" "}
              component. This is a pre-styled{" "}
              <Link to="/toggleSwitch" asLink>
                ToggleSwitch
              </Link>{" "}
              component designed specifically for this task.
            </p>
            <SampleCodeDropdown>
              <HCodeBlock language="javascript">
                {`import React from "react";\n` +
                  `import { ThemeToggle } from "thorium-ui";\n\n` +
                  `const MyComponent = (props) => {\n` +
                  `   return (<div>\n` +
                  `             <ThemeToggle />\n` +
                  `           </div>\n` +
                  `          )\n` +
                  `}\n` +
                  `export default MyComponent`}
              </HCodeBlock>
            </SampleCodeDropdown>
            <h3>Custom Component</h3>
            <p>
              Alternately, the <Code>ThoriumContext.toggleTheme()</Code>{" "}
              function can be called from within any other component. This can
              be useful if would like to toggle the theme as a result of some
              other external parameter.
            </p>

            <SampleCodeDropdown>
              <HCodeBlock langauge="javascript">
                {`import React from "react";\n` +
                  `import { ThoriumContext } from "thorium-ui";\n\n` +
                  `const MyToggleComponent = (props) => {\n` +
                  `   const context = React.useContext(ThoriumContext);\n` +
                  `   return <button onClick={context.toggleTheme()}>Click Me!</button>\n` +
                  `}\n` +
                  `export default MyToggleComponent`}
              </HCodeBlock>
            </SampleCodeDropdown>
          </PageBody>
        );
      }}
    </ThoriumConsumer>
  );
};
export default ThemeControlDetails;
