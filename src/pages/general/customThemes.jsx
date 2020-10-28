/* React */
import React from "react";
/* Thorium-UI */
import { Code, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import { HCodeBlock, PageSection } from "components";

export const CustomThemesDetails = () => {
  const theme = useTheme();
  const cs = useCustomStyles();

  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <>
      <p style={cs.h1}>Custom Themes</p>
      <p style={cs.subheading}>
        It is easy to customize the built-in themes any way you see fit. This
        can be done by passing a customThemes object to <Code>ThoriumRoot</Code>
        .
      </p>
      <PageSection id="customThemes-object">
        <p style={h2}>Creating the customThemes Object</p>
        <ol>
          <li>
            Create a <Code>customThemes.js</Code> file in the source directory
            of your project
          </li>
          <li>
            Import the default <Code>Themes</Code> object from{" "}
            <Code>thorium-ui</Code>
          </li>
          <li>
            Define a <Code>customThemes</Code> object which extends{" "}
            <Code>Themes</Code>
          </li>
          <li>
            Define objects to contain the different theme variants you wish to
            create. From here, the process is very similar to using classes
            within <Code>CSS</Code>.
          </li>
          <li>
            <em>optional:</em> You may also override any aspect of the default
            themes as you see fit.
          </li>
          <li>
            Combine your newly created themes with the corresponding
            customThemes attributes, and don't forget to export it as default!
          </li>
        </ol>
        <HCodeBlock language="javascript">
          {`import { Themes } from "thorium-ui";

const customThemes = { ...Themes };

const customLight = {
  myComponent: { backgroundColor:  "#000000"},
};

const customDark = {
  myComponent: { backgroundColor:  "#ffffff"},
};

customThemes.dark = { ...customThemes.dark, ...customDark };
customThemes.light = { ...customThemes.light, ...customLight };

/* Optionally override default theme parameters */
customThemes.light.colors.primary = "dodgerblue";
customThemes.dark.colors.primary = "indigo";

export default customThemes;`}
        </HCodeBlock>
      </PageSection>

      <PageSection id="note-about-body">
        <p style={{ ...cs.h2, color: theme.colors.danger }}>Note About Body:</p>
        <p>
          Because <Code>body</Code> styling is set explicitly outside of the{" "}
          <Code>ThoriumRoot</Code> component and not parsed by React, any
          respective parameters must be written in CSS string key format, not
          standard JSX.
        </p>
        <HCodeBlock language="javascript" disableCopy>
          {`{ body: { backgroundColor: "purple"} } //incorrect\n\n` +
            `{ body: { "background-color": "purple"} } //correct`}
        </HCodeBlock>
      </PageSection>
    </>
  );
};
export default CustomThemesDetails;
