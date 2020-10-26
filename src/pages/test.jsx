import React from "react";
import { Layer, Block, ToggleSwitch } from "thorium-ui";

export class test extends React.Component {
  render() {
    return (
      <Layer justify="center">
        <Block all={6}>
          <ToggleSwitch variant="success" />
        </Block>
      </Layer>
    );
  }
}
export default test;
