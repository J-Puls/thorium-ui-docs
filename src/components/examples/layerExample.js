import React from "react";
import { Layer, Block, ThoriumConsumer } from "thorium-ui";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const LayerExample = () => (
  <ThoriumConsumer>
    {(context) => {
      const diagram = context.customStyles.diagram;
      return (
        <Layer>
          {arr.map((x) => {
            return (
              <Block
                all={1}
                key={x}
                style={{ ...diagram.b, height: 50, padding: 0 }}
              />
            );
          })}
        </Layer>
      );
    }}
  </ThoriumConsumer>
);

export default LayerExample;
