import React from "react";
import { Layer, Block, ThoriumConsumer } from "thorium-ui";

export const DropdownDiagram = () => (
  <ThoriumConsumer>
    {(context) => {
      const diagram = context.customStyles.diagram;
      return (
        <Layer style={{ textAlign: "center" }} justify="center">
          <Block xs={12} sm={12} md={6} lg={6} xl={6} style={diagram.a}>
            <Layer justify="center">
              <Block>
                <p>Container</p>
              </Block>
              <Block all={12} style={diagram.b}>
                <p>Trigger</p>
              </Block>
              <Block all={12} vertical style={diagram.b}>
                <p>Menu</p>
                <Layer justify="center">
                  <Block all={12} style={diagram.c}>
                    <p>Item</p>
                  </Block>
                  <Block all={12} style={diagram.c}>
                    <p>Link</p>
                  </Block>
                  <Block all={12} style={diagram.c}>
                    <p>Divider</p>
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

export default DropdownDiagram;
