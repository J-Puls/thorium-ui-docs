/* React */
import React from "react";
/* Thorium-UI */
import {
  BurgerButton,
  Code,
  Layer,
  Link,
  useCustomStyles,
  useTheme,
} from "thorium-ui";
/* Custom Components */
import {
  BurgerButtonExample,
  HCodeBlock,
  PageBody,
  PageSection,
  SampleCodeDropdown,
} from "components";

export const BurgerButtonDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <PageBody>
      <p style={cs.h1}>BurgerButton</p>
      <div style={cs.subheading}>
        A <Code>BurgerButton</Code> is a pre-styled button to be used as the
        trigger for a mobile{" "}
        <Link to="/dropdown" asLink>
          Dropdown
        </Link>{" "}
        menu.
      </div>
      <p>
        Click the <Code>BurgerButton</Code> below to see its functionality in
        action. Notice how the icon reacts to the visibility state of its
        respective menu.
      </p>
      <BurgerButtonExample />

      <PageSection id="triggering">
        <p style={h2}>Triggering</p>
        <p>
          Connecting the <Code>BurgerButton</Code> to its respective{" "}
          <Code>Dropdown</Code> can be done by following a few simple steps:
        </p>
        <ol>
          <li>
            Pass the <Code>remoteTrigger</Code> prop to the{" "}
            <Code>Dropdown</Code>
          </li>
          <li>Supply a unique id to each component respectively</li>
          <li>
            Pass the <Code>Dropdown</Code> id to the <Code>BurgerButton</Code>{" "}
            as <Code>targetID</Code>
          </li>
          <li>
            Pass the <Code>BurgerButton</Code> id to the <Code>Dropdown</Code>{" "}
            as <Code>triggerID</Code>
          </li>
        </ol>
        <p>
          With this set properly, the two components can now interact with one
          another, even if they are in completely separate parts of the page, or
          embedded in other components.
        </p>
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Layer justify="center">\n` +
              ` <Block xs={12} sm={12} md={10} lg={10} xl={10} justify="end">\n` +
              `  <BurgerButton variant="dark" targetID="burger-example-menu" id="burger-example-button"/>\n` +
              ` </Block>\n` +
              ` <Block xs={12} sm={12} md={8} lg={8} xl={8}>\n` +
              `  <Dropdown remoteTrigger triggerID="burger-example-button" id="burger-example-menu">\n` +
              `   <Dropdown.Link to="#">Example Link</Dropdown.Link>\n` +
              `   <Dropdown.Link to="#">Example Link</Dropdown.Link>\n` +
              `  </Dropdown>\n` +
              ` </Block>\n` +
              `</Layer>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>
      <PageSection id="styling">
        <p style={h2}>Styling</p>
        <div>
          As it is little more than a specialized{" "}
          <Link to="/button" asLink>
            Button
          </Link>{" "}
          component, the same <Code>variant</Code> values are valid for styling.
        </div>
        <Layer justify="evenly" style={{ paddingTop: "1em" }}>
          <BurgerButton variant="primary" targetID="#" />
          <BurgerButton variant="secondary" targetID="#" />
          <BurgerButton variant="success" targetID="#" />
          <BurgerButton variant="warning" targetID="#" />
          <BurgerButton variant="danger" targetID="#" />
          <BurgerButton variant="light" targetID="#" />
          <BurgerButton variant="dark" targetID="#" />
          <BurgerButton variant="link" targetID="#" />
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<BurgerButton variant="primary" targetID="#" />
<BurgerButton variant="secondary" targetID="#" />
<BurgerButton variant="success" targetID="#" />
<BurgerButton variant="warning" targetID="#" />
<BurgerButton variant="danger" targetID="#" />
<BurgerButton variant="light" targetID="#" />
<BurgerButton variant="dark" targetID="#" />
<BurgerButton variant="link" targetID="#" />
`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="icon-color">
        <p style={h2}>Icon Color</p>
        <p>
          By default, the <Code>BurgerButton</Code> icons will be styled in
          accordance to the respective button variant. However, if custom icon
          coloring is desired, this can be overridden by passing a valid color
          string to the <Code>iconFill</Code> prop.
        </p>
        <BurgerButton variant="warning" targetID="#" iconFill="indigo" />
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<BurgerButton variant="warning" targetID="#" iconFill="indigo"/>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>
    </PageBody>
  );
};

export default BurgerButtonDetails;
