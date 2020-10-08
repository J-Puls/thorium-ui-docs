import React from "react";
import { Layer, Block, Button, Icon } from "thorium-ui";
import Icons from "../../assets/logos.svg";

export const IconExample = () => (
  <Layer justify="center">
    <Block all={6} justify="around">
      <Button variant="dark">
        <Icon
          src={`${Icons}#chevron-up`}
          width={24}
          height={24}
          fill="dodgerblue"
        />
      </Button>
      <Button variant="dark">
        <Icon
          src={`${Icons}#chevron-down`}
          width={24}
          height={24}
          fill="dodgerblue"
        />
      </Button>
    </Block>
  </Layer>
);

export default IconExample;
