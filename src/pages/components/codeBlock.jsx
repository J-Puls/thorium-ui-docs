/* React */
import React from "react";
/* Thorium-UI */
import { Code, Link, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import {
  CodeBlockAPI,
  HCodeBlock,
  PageSection,
  SampleCodeDropdown,
  CodeBlockExample,
} from "components";

export const CodeBlockDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <>
      <p style={cs.h1}>CodeBlock</p>
      <p style={cs.subheading}>
        <Code>CodeBlock</Code> provides a convenient way to share any text that
        needs to retain a specific formatting (such as blocks of code).{" "}
        <Code>CodeBlock</Code> components come with a built-in copy-to-clipboard
        button, no setup required.
      </p>

      <PageSection id="usage">
        <p style={h2}>Usage</p>
        <p style={cs.subheading}>
          Passing a JavaScript template-literal string as the{" "}
          <Code>CodeBlock</Code>'s only child will render exactly as formatted.
        </p>
        <CodeBlockExample />
      </PageSection>

      <PageSection id="syntax-highlighting">
        <p style={h2}>Syntax Highlighting</p>
        <p style={cs.subheading}>
          Until an integrated solution has been developed, it is currently
          recommended to use a third-party parsing plugin, such as{" "}
          <Link asAnchor href="https://highlightjs.org/" target="_blank">
            Highlight.js
          </Link>{" "}
          for syntax highlighting.
        </p>
        This website uses the <Code>react-highlight.js</Code> package to
        facilitate syntax highlighting.
        <HCodeBlock language="bash">{`npm i react-highlight.js`}</HCodeBlock>
        <SampleCodeDropdown>
          <HCodeBlock>
            {`import React from "react";
import { CodeBlock } from "thorium-ui";
import Highlight from "react-highlight.js";

export const HighlightedCodeBlock = (props) => (
  <CodeBlock >
    <Highlight language={props.language}>{props.children}</Highlight>
  </CodeBlock>
);

export default HCodeBlock;`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="disabling-copy">
        <p style={h2}>Disabling copy functionality</p>
        <p>
          If you prefer a <Code>CodeBlock</Code> without the built-in copy
          button, use the prop <Code>disableCopy</Code>.
        </p>
        <p>
          To disable the ability for users to manually copy the contents of the{" "}
          <Code>CodeBlock</Code>, add the <Code>disableSelect</Code> prop.
        </p>
      </PageSection>

      <PageSection id="codeBlock-api">
        <p style={h2}>API</p>
        <CodeBlockAPI />
      </PageSection>
    </>
  );
};

export default CodeBlockDetails;
