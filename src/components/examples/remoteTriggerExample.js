import React from "react";
import { Dropdown, Button, Block } from "thorium-ui";

export class RemoteTriggerExample extends React.Component {
  render() {
    return (
      <Block
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        rounded
        style={{
          border: "1px solid black",
          paddingTop: ".5rem",
          paddingBottom: ".5rem",
        }}
      >
        <Button onClick={() => this.trigger.toggle()}>Click Me!</Button>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing. Labore
          perferendis, voluptas temporibus in reiciendis consectetur ea neque
          maxime laboriosam quaerat ducimus quibusdam reprehenderit commodi non
          tempore atque ex at esse!
        </p>
        <Dropdown remoteTrigger ref={(el) => (this.trigger = el)}>
          <Dropdown.Link to="#">Link</Dropdown.Link>
        </Dropdown>
      </Block>
    );
  }
}
export default RemoteTriggerExample;
