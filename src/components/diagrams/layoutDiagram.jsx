/* React */
import React from "react";
/* Thorium-UI */
import { Block, Layer, useCustomStyles } from "thorium-ui";

export const LayoutDiagram = () => {
  const cs = useCustomStyles();
  return (
    <Layer justify="center" style={{ textAlign: "center" }}>
      <Block xs={12} sm={12} md={8} lg={8} xl={8} style={cs.diagram.a}>
        <Layer justify="center">
          <Block className="test-class">
            <p>Container</p>
          </Block>
          <Block all={12} style={cs.diagram.b}>
            <p>Layer</p>
            <Layer justify="center">
              <Block xs={6} sm={6} md={4} lg={4} xl={4} style={cs.diagram.c}>
                <p>Block</p>
              </Block>
              <Block xs={6} sm={6} md={4} lg={4} xl={4} style={cs.diagram.c}>
                <p>Block</p>
              </Block>
              <Block xs={6} sm={6} md={4} lg={4} xl={4} style={cs.diagram.c}>
                <p>Block</p>
              </Block>
              <Block all={12} style={cs.diagram.c}>
                <p>Block</p>
              </Block>
            </Layer>
          </Block>
        </Layer>
      </Block>
    </Layer>
  );
};

export default LayoutDiagram;
