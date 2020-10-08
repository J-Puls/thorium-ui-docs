import React from "react";
import { Layer, Block, ThoriumConsumer } from "thorium-ui";

export const LayoutDiagram = () => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      const diagram = cs.diagram;
      return (
        <Layer style={{ textAlign: "center" }} justify="center">
          <Block xs={12} sm={12} md={8} lg={8} xl={8} style={diagram.a}>
            <Layer justify="center">
              <Block className="test-class">
                <p>Container</p>
              </Block>
              <Block all={12} style={diagram.b}>
                <p>Layer</p>
                <Layer justify="center">
                  <Block xs={6} sm={6} md={4} lg={4} xl={4} style={diagram.c}>
                    <p>Block</p>
                  </Block>
                  <Block xs={6} sm={6} md={4} lg={4} xl={4} style={diagram.c}>
                    <p>Block</p>
                  </Block>
                  <Block xs={6} sm={6} md={4} lg={4} xl={4} style={diagram.c}>
                    <p>Block</p>
                  </Block>
                  <Block all={12} style={diagram.c}>
                    <p>Block</p>
                  </Block>
                </Layer>
              </Block>
            </Layer>
          </Block>
        </Layer>
      );
    }}
  </ThoriumConsumer>
);

export default LayoutDiagram;
