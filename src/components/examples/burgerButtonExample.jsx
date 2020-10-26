/* React */
import React from "react";
/* Thorium-UI */
import {
  Block,
  BurgerButton,
  Dropdown,
  Layer,
  useCustomStyles,
} from "thorium-ui";

export const BurgerButtonExample = () => {
  const cs = useCustomStyles();
  return (
    <Layer justify="center">
      <Block all={10} style={cs.px0}>
        <Layer>
          <BurgerButton
            variant="dark"
            targetID="burger-example-menu"
            id="burger-example-button"
          />
        </Layer>
      </Block>
      <Block all={10}>
        <Dropdown
          remoteTrigger
          triggerID="burger-example-button"
          id="burger-example-menu"
        >
          <Dropdown.Link to="#">Example Link</Dropdown.Link>
          <Dropdown.Link to="#">Example Link</Dropdown.Link>
        </Dropdown>
      </Block>
    </Layer>
  );
};

export default BurgerButtonExample;
