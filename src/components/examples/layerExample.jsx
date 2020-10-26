/* React */
import React from "react";
/* Thorium-UI */
import { Block, Layer, useCustomStyles } from "thorium-ui";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const LayerExample = () => {
  const cs = useCustomStyles();
  return (
    <Layer>
      {arr.map((x) => {
        return (
          <Block
            all={1}
            key={x}
            style={{ ...cs.diagram.b, height: 50, padding: 0 }}
          />
        );
      })}
    </Layer>
  );
};

export default LayerExample;
