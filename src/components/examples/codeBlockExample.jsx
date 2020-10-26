/* React */
import React from "react";
/* Thorium-UI */
import { Block, CodeBlock, Layer } from "thorium-ui";

export const CodeBlockExample = () => {
  return (
    <Layer>
      <Block xs={12} sm={12} md={6} lg={6} xl={6}>
        <p>Input</p>
        <CodeBlock>
          {`<CodeBlock>
{\`CodeBlock line 1
    CodeBlock line 2
        CodeBlock line 3\`}
</CodeBlock>`}
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
  );
};

export default CodeBlockExample;
