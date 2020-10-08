import React from "react";
import { Code, ThoriumConsumer } from "thorium-ui";
import { HCodeBlock, PageBody } from "components";

export const CustomThemesDetails = () => {
  return (
    <ThoriumConsumer>
      {(context) => {
        const cs = context.customStyles;
        const h2 = { ...cs.h2, ...context.theme.h2 };
        return (
          <PageBody>
            <p style={cs.h1}>Custom Themes</p>
            <p style={cs.subheading}>
              While basic styling is provided, it is easy to customize the
              themes any way you see fit. This can be done by creating a{" "}
              <Code>customThemes.js</Code> file in the <Code>src</Code>{" "}
              directory of your project.
            </p>
            <p style={h2}>The customThemes Object</p>
            <p>
              In the customThemes.js file, export an object named customThemes
              containing the changes you wish to make. Any component that uses
              different styles between themes can be modified here. This is also
              where the default color palette can be changed.
            </p>
            <HCodeBlock language="javascript">
              {`export const customThemes = {\n` +
                `   dark: {\n` +
                `       body: { "background-color": "purple" }\n` +
                `       colors: { primary: "yellow" }\n` +
                `       }\n` +
                `   light: {\n` +
                `       body: { "background-color": "orange" }\n` +
                `       colors: { primary: "pink" }\n` +
                `       }\n` +
                `   };`}
            </HCodeBlock>
            <span
              style={{ ...cs.subheading, color: context.theme.colors.danger }}
            >
              Note:{" "}
            </span>

            <p>
              Because <Code>body</Code> styling is set explicitely outside of
              the <Code>ThoriumRoot</Code> component and not parsed by React,
              any respective parameters must be written in CSS string key
              format, not standard JSX.
            </p>
            <HCodeBlock language="javascipt" disableCopy>
              {`{ body: { backgroundColor: "purple"} } //incorrect\n\n` +
                `{ body: { "background-color": "purple"} } //correct`}
            </HCodeBlock>
          </PageBody>
        );
      }}
    </ThoriumConsumer>
  );
};
export default CustomThemesDetails;
