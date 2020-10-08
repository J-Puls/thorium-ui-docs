import React from "react";
import {
  PageBody,
  HCodeBlock,
  SampleCodeDropdown,
  DropdownDiagram,
  DropdownSubcomponents,
  RemoteTriggerExample,
} from "components";
import {
  Block,
  Button,
  Code,
  Dropdown,
  Layer,
  ThoriumConsumer,
} from "thorium-ui";

export const DropdownDetails = () => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      const h2 = { ...cs.h2, ...context.theme.h2 };
      return (
        <PageBody>
          <p style={cs.h1}>Dropdown</p>
          <p style={cs.subheading}>
            A <Code>Dropdown</Code> is a collapsable menu with a customizable
            trigger.
          </p>
          <p style={h2}>Subcomponent layout</p>
          <DropdownDiagram />
          <p style={h2}>Subcomponents</p>
          <DropdownSubcomponents />
          <p style={h2}>Behaviors</p>
          <h3>defaultState</h3>
          <p>
            By default, <Code>Dropdown</Code> components are initially rendered
            in their closed state. To change this, set the{" "}
            <Code>defaultState</Code> prop to "open".
          </p>
          <h3>text</h3>
          <p>
            Define the text to be displayed on the trigger button with the{" "}
            <Code>text</Code> prop.
          </p>
          <h3>collapseOnClick</h3>
          <p>
            If you would like the dropdown to automatically collapse after
            clicking an item within its menu, use the collapseOnClick prop.
          </p>
          <h3>triggerType</h3>
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

          <h3>displayType</h3>
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
              {`<Dropdown displayType="block" text="block">\n` +
                `  <DropdownLink to="#">Link</DropdownLink>\n` +
                `</Dropdown>\n` +
                `<Dropdown displayType="float" text="float">\n` +
                `  <DropdownLink to="#">Link</DropdownLink>\n` +
                `</Dropdown>`}
            </HCodeBlock>
          </SampleCodeDropdown>

          <h3>Triggering remotely</h3>
          <p>
            To toggle the <Code>Menu</Code> from a sibling component:
          </p>
          <ol>
            <li>
              Pass the <Code>remoteTrigger</Code> prop to the{" "}
              <Code>Dropdown</Code>.
            </li>
            <li>
              In the parent, create a <Code>ref</Code> and pass it to the{" "}
              <Code>Dropdown</Code>.
            </li>
            <li>
              Provide an event handler to the desired trigger, passing the
              corresponding <Code>toggle()</Code> callback function.
            </li>
          </ol>
          <h3>Example:</h3>
          <Layer justify="center">
            <RemoteTriggerExample />
          </Layer>
          <SampleCodeDropdown>
            <HCodeBlock language="javascript">
              {`import React from "react";\n` +
                `import { Block, Button, Dropdown } from "../thorium-ui";\n\n` +
                `class MyComponent extends React.Component {\n` +
                `   render() {\n` +
                `     return (\n` +
                `          <Block>\n` +
                `            <div>\n` +
                `              <Button onClick={() => this.trigger.toggle()}>\n` +
                `                Click Me!\n` +
                `              </Button>\n` +
                `            </div>\n` +
                `            <p>\n` +
                `               Lorem ipsum dolor, sit amet consectetur adipisicing.\n` +
                `               Labore perferendis, voluptas temporibus in\n` +
                `               reiciendis consectetur ea neque maxim\n` +
                `               laboriosam quaerat ducimusquibusdam reprehenderit\n` +
                `               commodi non tempore atque ex at esse!\n` +
                `            </p>\n` +
                `            <Dropdown remoteTrigger ref={(el) => (this.trigger = el)}>\n` +
                `              <Dropdown.Link to="#">Link</Dropdown.Link>\n` +
                `            </Dropdown>\n` +
                `           </Block>);\n` +
                `         }\n` +
                ` }\n` +
                `export default MyComponent;`}
            </HCodeBlock>
          </SampleCodeDropdown>

          <p style={h2}>Styling</p>
          <h3>icons</h3>
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
              {`<Dropdown text="Icons" icons>\n` +
                `  <Dropdown.Link to="#">Link</Dropdown.Link>\n` +
                `</Dropdown>`}
            </HCodeBlock>
          </SampleCodeDropdown>

          <h3>Other styling</h3>
          <p>
            The <Code>Trigger</Code> is just a <Code>Button</Code> at its core,
            and as such can be styled by passing the same <Code>size</Code> and{" "}
            <Code>variant</Code> props.
          </p>
        </PageBody>
      );
    }}
  </ThoriumConsumer>
);
