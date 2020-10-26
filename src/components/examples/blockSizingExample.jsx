/* React */
import React from "react";
/* Thorium-UI */
import { Block, Layer, useCustomStyles } from "thorium-ui";

export const BlockSizingExample = () => {
  const cs = useCustomStyles();
  return (
    <Layer style={{ textAlign: "center" }}>
      <Block xs={6} sm={5} md={4} lg={3} xl={2} style={cs.diagram.b}>
        <p>Block 1 - Explicit sizing</p>
      </Block>
      <Block style={cs.diagram.b}>
        <p>Block 2 - Variable sizing</p>
      </Block>
      <Block style={cs.diagram.b} all={12}>
        <p>Block 3 - Universal sizing</p>
      </Block>
    </Layer>
  );
};

export default BlockSizingExample;
