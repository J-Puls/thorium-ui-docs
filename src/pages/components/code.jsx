/* React */
import React from "react";
/* Thorium-UI */
import { Code, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import { CodeExample, PageBody, PageSection } from "components";

export const CodeDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <PageBody>
      <p style={cs.h1}>Code</p>
      <p style={cs.subheading}>
        A pre-styled {`&`} themed wrapper used to highlight keywords within
        text.
      </p>
      <PageSection id="example">
        <p style={h2}>Example</p>
        <p>
          Observe the following text examples, the first using plain text, the
          second using <Code>Code</Code> wrappers to highlight important
          keywords.
        </p>
        <CodeExample />
        <p>
          Highlighting important keywords within the block of text can be an
          effective means of drawing attention to the important bits of
          information within.
        </p>
      </PageSection>
    </PageBody>
  );
};

export default CodeDetails;
