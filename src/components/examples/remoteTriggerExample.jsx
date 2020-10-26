/* React */
import React from "react";
/* Thorium-UI */
import { Block, Button, Dropdown } from "thorium-ui";

export const RemoteTriggerExample = () => {
  const myDropdown = React.createRef();
  const handleTrigger = () => myDropdown.current.toggle();

  return (
    <Block>
      <div>
        <Button onClick={handleTrigger}>Click Me!</Button>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing. Labore perferendis,
        voluptas temporibus in reiciendis consectetur ea neque maxim laboriosam
        quaerat ducimusquibusdam reprehenderit commodi non tempore atque ex at
        esse!
      </p>
      <Dropdown remoteTrigger ref={myDropdown}>
        <Dropdown.Link to="#">Link</Dropdown.Link>
      </Dropdown>
    </Block>
  );
};

export default RemoteTriggerExample;
