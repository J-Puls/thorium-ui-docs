/* React */
import React from "react";
/* Thorium components */
import { CodeBlock } from "thorium-ui";
/* Highlight.js */
import Highlight from "react-highlight.js";

// Custom CodeBlock that implements Highlight.js
export const HCodeBlock = (props) => {
  return (
    <CodeBlock disableCopy={props.disableCopy}>
      <Highlight language={props.language}>{props.children}</Highlight>
    </CodeBlock>
  );
};

export default HCodeBlock;
