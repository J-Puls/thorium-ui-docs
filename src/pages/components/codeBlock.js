import React from "react";
import { CodeBlock, Code, Block, Layer, ThoriumConsumer } from "thorium-ui";
import { CodeBlockAPI, PageBody } from "components";

export const CodeBlockDetails = () => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      const h2 = { ...cs.h2, ...context.theme.h2 };
      return (
        <PageBody>
          <p style={cs.h1}>CodeBlock</p>
          <p style={cs.subheading}>
            <Code>CodeBlock</Code> provides a convenient way to share any text
            that needs to retain a specific formatting (such as blocks of code).{" "}
            <Code>CodeBlock</Code> components come with a built-in
            copy-to-clipboard button, no setup required.
          </p>

          <p style={h2}>How to Use</p>
          <p>
            To display a block of plain pre-formatted text, simply pass it as a
            child in the form of a Javascript template literal, and it will be
            displayed exactly as written.
          </p>
          <Layer>
            <Block xs={12} sm={12} md={6} lg={6} xl={6}>
              <p>Input</p>
              <CodeBlock>
                {`<CodeBlock>\n` +
                  `{\n\`CodeBlock line 1\n` +
                  `   CodeBlock line 2\n` +
                  `     CodeBlock line 3\` \n}\n` +
                  `</CodeBlock>`}
              </CodeBlock>
            </Block>
            <Block xs={12} sm={12} md={6} lg={6} xl={6}>
              <p>Output</p>
              <CodeBlock>
                {`CodeBlock line 1\n` +
                  `  CodeBlock line 2\n` +
                  `     CodeBlock line 3`}
              </CodeBlock>
            </Block>
          </Layer>
          <p style={h2}>Syntax Highlighting</p>

          <h3>
            Third-party Javascript parsers <br />
          </h3>
          <p>
            Until an integrated solution is developed, it is currently
            recommended to use a third-party parsing plugin, such as{" "}
            <a
              href="https://highlightjs.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Code>Highlight.js</Code>
            </a>{" "}
            for syntax highlighting.
          </p>
          <p style={h2}>Disabling copy functionality</p>
          <p>
            If you prefer a <Code>CodeBlock</Code> without the built-in copy
            button, use the prop <Code>disableCopy</Code>.
          </p>
          <p>
            To disable the ability for users to manually copy the contents of
            the <Code>CodeBlock</Code>, add the <Code>disableSelect</Code> prop.
          </p>
          <p style={h2}>API</p>
          <CodeBlockAPI />
        </PageBody>
      );
    }}
  </ThoriumConsumer>
);

export default CodeBlockDetails;
