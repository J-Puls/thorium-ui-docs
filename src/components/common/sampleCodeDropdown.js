import React from "react";
import { Layer, Block, Dropdown } from "thorium-ui";

export const SampleCodeDropdown = (props) => {
  return (
    <Layer justify="center" style={{ marginTop: "1rem" }}>
      <Block all={12}>
        <Dropdown text="Sample Code" variant="dark" icons>
          <Dropdown.Item noHover>{props.children}</Dropdown.Item>
        </Dropdown>
      </Block>
    </Layer>
  );
};

export default SampleCodeDropdown;
