/* React */
import React from "react";
/* Thorium-UI */
import { Block, Layer, useCustomStyles } from "thorium-ui";

export const NavDiagram = () => {
  const cs = useCustomStyles();
  return (
    <Layer justify="center" style={{ textAlign: "center" }}>
      <Block xs={12} sm={12} md={6} lg={6} xl={6} style={cs.diagram.a}>
        <Layer justify="center">
          <Block>
            <p>Nav</p>
          </Block>
          <Block all={12} style={cs.diagram.b}>
            <p>Item</p>
          </Block>
          <Block all={12} vertical style={cs.diagram.b}>
            <p>Item</p>
            <Layer justify="center">
              <Block all={12} style={cs.diagram.c}>
                <p>Link</p>
              </Block>
            </Layer>
          </Block>
        </Layer>
      </Block>
    </Layer>
  );
};

export default NavDiagram;
