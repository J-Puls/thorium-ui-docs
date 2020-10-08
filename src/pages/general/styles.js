import React from "react";
import { Code, ThoriumConsumer } from "thorium-ui";
import { HCodeBlock, PageBody } from "components";

export const StylesDetails = () => {
  return (
    <ThoriumConsumer>
      {(context) => {
        const s = context.customStyles;
        return (
          <PageBody>
            <h1 style={s.h1}>Custom Styling</h1>
            <p style={s.subheading}>
              Thorium-UI is designed at its core to operate completely
              independent of style sheets. While traditional CSS can still be
              used in the standard fashion to style elements and components,
              Thorium-UI offers a pure Javascript way to define and control
              styling.
            </p>
            <h2 style={s.h2}>Programatic Styling</h2>
            <p>
              Traditionally, the <Code>class</Code> attribute (or the{" "}
              <Code>classname</Code> prop in React) is used to identify elements
              which share the same styling properties. Throium-UI uses a very
              similar concept, however all styling is stored in JSON objects and
              programatically inserted inline during the render process. Any
              custom styling that is to be used is defined within a{" "}
              <Code>customStyles.js</Code> file in the <Code>/src</Code>{" "}
              directory.
            </p>
            <p style={s.h2}>Functional customStyles</p>
            <p>
              Functional <Code>customStyles</Code> is the most flexible way to
              go about defining custom "classes", as it allows your styling to
              change dynamically with the rest of the application.
            </p>
            <p>
              To implement a functional customStyles object, begin by creating a{" "}
              <Code>customStyles.js</Code> file within the <Code>/src</Code>{" "}
              directory of your project.
            </p>
            <p>
              Next, export a function named customStyles (adding any parameters
              you wish to style against), which returns an object containing the
              React-formatted style definitions to be used (you can think of
              these definitions as classes in CSS as they are implemented in a
              very similar fashion).
            </p>
            <p>
              In this example, we pass the function the current theme (derived
              from the current state of the ThroiumRoot component), and from
              that, we are able to access the color values for the theme
              currently in use.
            </p>
            <HCodeBlock language="javascript">
              {`export const customStyles = (theme) => {\n` +
                `   return ({\n` +
                `       h1: { textDecoration: "underline" },\n` +
                `       h2: { color: theme.colors.secondary },\n` +
                `   });\n` +
                `}`}
            </HCodeBlock>
            <p style={s.h2}>Static customStyles</p>
            <p>
              Static customStyles follow the same basic idea as their functional
              counterparts, however without the ability to process external
              variables. To use a static customStyles, follow the same
              instructions as above, however instead of a function, simply
              export and object containing the static definitions.
            </p>
            <HCodeBlock language="javascript">
              {`export const customStyles = {\n` +
                `   return ({\n` +
                `       h1: { textDecoration: "underline" },\n` +
                `       h2: { color: "dodgerBlue" },\n` +
                `   });\n` +
                `}`}
            </HCodeBlock>
            <p style={s.h2}>Using custom styles</p>
            <p>
              Once the custom styling has been defined, you need to add these
              styles to their corresponding components.
            </p>
            <p>
              Begin by accessing the customStyles object contained within{" "}
              <Code>ThoriumContext</Code>. From here, you can simply add the
              "class" to the <Code>style</Code> prop of the component.
            </p>
            <HCodeBlock language="javascript">
              {`import React from "react";\n` +
                `import ThoriumContext from "../thorium-ui/ThoriumContext";\n\n` +
                `const ExampleComponent = (props) => {\n` +
                `   const context = React.useContext(ThoriumContext);\n` +
                `   const s = context.customStyles;\n` +
                `   return (<div>\n` +
                `             <p style={s.h1}>Custom Styled p Tag</p>\n` +
                `          </div>)\n` +
                `}\n` +
                `export default ExampleComponent;`}
            </HCodeBlock>
            `
          </PageBody>
        );
      }}
    </ThoriumConsumer>
  );
};
export default StylesDetails;
