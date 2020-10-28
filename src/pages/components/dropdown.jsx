/* React */
import React from "react";
/* Thorium-UI */
import {
  Block,
  Button,
  Code,
  Dropdown,
  Layer,
  useCustomStyles,
  useTheme,
} from "thorium-ui";
/* Custom Components */
import {
  DropdownAPI,
  DropdownDiagram,
  DropdownSubcomponents,
  HCodeBlock,
  PageSection,
  RemoteTriggerExample,
  SampleCodeDropdown,
} from "components";

export const DropdownDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <>
      <p style={cs.h1}>Dropdown</p>
      <p style={cs.subheading}>
        A <Code>Dropdown</Code> is a collapsible menu with a customizable
        trigger.
      </p>
      <PageSection id="sub-component-layout">
        <p style={h2}>Sub-component layout</p>
        <DropdownDiagram />
      </PageSection>

      <PageSection id="sub-components">
        <p style={h2}>Sub-components</p>
        <DropdownSubcomponents />
      </PageSection>

      <PageSection id="triggerType">
        <p style={h2}>triggerType</p>
        <p>
          By default, a <Code>Dropdown</Code> is activated by clicking the
          trigger button. To activate the menu by hovering, set the{" "}
          <Code>triggerType</Code> prop to "hover".
        </p>
        <Layer>
          <Block xs={12} sm={12} md={6} lg={6} xl={6} style={cs.mtp5}>
            <Dropdown triggerType="click" text="Click Me!">
              <Dropdown.Item>
                <Button stretch>Item</Button>
              </Dropdown.Item>
              <Dropdown.Link to="#">Link</Dropdown.Link>
            </Dropdown>
          </Block>
          <Block xs={12} sm={12} md={6} lg={6} xl={6} style={cs.mtp5}>
            <Dropdown triggerType="hover" text="Hover Me!">
              <Dropdown.Item>
                <Button stretch>Item</Button>
              </Dropdown.Item>
              <Dropdown.Link to="#">Link</Dropdown.Link>
            </Dropdown>
          </Block>
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Dropdown triggerType="click" text="Click Me!">\n` +
              `  <Dropdown.Item>\n` +
              `    <Button stretch>Item</Button>\n` +
              `  </Dropdown.Item>\n` +
              `  <Dropdown.Link to="#">Link</Dropdown.Link>\n` +
              `</Dropdown>\n` +
              `<Dropdown triggerType="hover" text="Hover Me!">\n` +
              `  <Dropdown.Item>\n` +
              `    <Button stretch>Item</Button>\n` +
              `  </Dropdown.Item>\n` +
              `  <Dropdown.Link to="#">Link</Dropdown.Link>\n` +
              `</Dropdown>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="displayType">
        <p style={h2}>displayType</p>
        <p>
          By default, adjacent content will be pushed out of the way when
          expanded. However, the <Code>Menu</Code> can be set to float over
          other content when expanded, pass "float" to the{" "}
          <Code>displayType</Code> prop.
        </p>
        <Layer justify="evenly">
          <Block xs={12} sm={12} md={6} lg={6} xl={6} style={cs.mtp5}>
            <Dropdown displayType="block" text="block">
              <Dropdown.Link to="#">Link</Dropdown.Link>
            </Dropdown>
          </Block>
          <Block xs={12} sm={12} md={6} lg={6} xl={6} style={cs.mtp5}>
            <Dropdown displayType="float" text="float">
              <Dropdown.Link to="#">Link</Dropdown.Link>
            </Dropdown>
          </Block>
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Dropdown displayType="block" text="block">
  <DropdownLink to="#">Link</DropdownLink>
</Dropdown>
<Dropdown displayType="float" text="float">
  <DropdownLink to="#">Link</DropdownLink>
</Dropdown>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="remoteTrigger">
        <p style={h2}>remoteTrigger</p>
        <p>
          To toggle the <Code>Menu</Code> from a sibling component:
        </p>
        <ol>
          <li>
            Pass the <Code>remoteTrigger</Code> prop to the{" "}
            <Code>Dropdown</Code>
          </li>
          <li>
            In the parent component, create a <Code>ref</Code> to the{" "}
            <Code>Dropdown</Code>
          </li>
          <li>
            Provide an event handler to the component you want to use as the
            trigger, which calls the <Code>toggle()</Code> function for the{" "}
            <Code>Dropdown</Code>
          </li>
        </ol>

        <Layer justify="center">
          <RemoteTriggerExample />
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock language="javascript">
            {`import React from "react";
import { Block, Button, Dropdown } from "thorium-ui";

export const MyComponent = (props) => {
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

export default MyComponent;`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="icons">
        <p style={h2}>icons</p>
        <p>
          To add corresponding "open" and "close" icons to the trigger button,
          pass the <Code>icons</Code> prop.
        </p>
        <Layer justify="evenly">
          <Block xs={12} sm={12} md={6} lg={6} xl={6} style={cs.mtp5}>
            <Dropdown text="Icons" icons>
              <Dropdown.Link to="#">Link</Dropdown.Link>
            </Dropdown>
          </Block>
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Dropdown text="Icons" icons>
  <Dropdown.Link to="#">Link</Dropdown.Link>
</Dropdown>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="dropdown-api">
        <p style={h2}>API</p>
        <DropdownAPI />
      </PageSection>
    </>
  );
};
