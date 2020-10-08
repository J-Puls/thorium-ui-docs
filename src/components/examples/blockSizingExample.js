import React from "react";
import { Layer, Block, ThoriumConsumer } from "thorium-ui";

export const BlockSizingExample = () => (
  <ThoriumConsumer>
    {(context) => {
      const diagram = context.customStyles.diagram;
      return (
        <Layer style={{ textAlign: "center" }}>
          <Block xs={6} sm={5} md={4} lg={3} xl={2} style={diagram.b}>
            <p>Block 1 - Explicit sizing</p>
          </Block>
          <Block style={diagram.b}>
            <p>Block 2 - Variable sizing</p>
          </Block>
          <Block style={diagram.b} all={12}>
            <p>Block 3 - Universal sizing</p>
          </Block>
        </Layer>
      );
    }}
  </ThoriumConsumer>
);

export default BlockSizingExample;
