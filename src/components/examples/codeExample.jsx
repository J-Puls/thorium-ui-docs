/* React */
import React from "react";
/* Thorium-UI */
import { Block, Code, Layer, useCustomStyles } from "thorium-ui";

export const CodeExample = () => {
  const cs = useCustomStyles();
  return (
    <Layer justify="evenly">
      <Block xs={12} sm={12} md={5} lg={5} xl={5} style={cs.diagram.b}>
        <p>
          In Javascript, it is possible to convert the contents of a String to
          all lowercase characters. To accomplish this, call the toLower()
          function on the desired String.
        </p>
      </Block>
      <Block xs={12} sm={12} md={5} lg={5} xl={5} style={cs.diagram.c}>
        <p>
          In Javascript, it is possible to convert the contents of a{" "}
          <Code>String</Code> to all lowercase characters. To accomplish this,
          call the <Code>toLower()</Code> function on the desired{" "}
          <Code>String</Code>.
        </p>
      </Block>
    </Layer>
  );
};

export default CodeExample;
