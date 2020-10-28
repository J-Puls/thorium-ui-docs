/* React */
import React from "react";
/* Thorium-UI */
import { Code, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import {
  HCodeBlock,
  NavDiagram,
  PageSection,
  SampleCodeDropdown,
  navExamples,
} from "components";

export const NavDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <>
      <h1 style={cs.h1}>Nav</h1>
      <p style={cs.subheading}>
        <Code>Nav</Code> components provide a pre-styled navigation menu that
        can be included in any layout component.
      </p>

      <PageSection id="sub-component-layout">
        <p style={h2}>Sub-component Layout</p>
        <NavDiagram />
      </PageSection>

      <PageSection id="orientation">
        <p style={h2}>Orientation</p>
        <h3>Normal</h3>
        {navExamples.orientation.normal}
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Nav justify="evenly" centerLinks style={{ border: "1px solid gray" }}>
  <Nav.Item navkey={0}>Item 1</Nav.Item>
  <Nav.Item navkey={1}>Item 2</Nav.Item>
  <Nav.Item navkey={2}>Item 3</Nav.Item>
</Nav>`}
          </HCodeBlock>
        </SampleCodeDropdown>

        <h3>Vertical</h3>
        <p>
          Because it is a <Code>Block</Code> at its core, the Nav component
          accepts a <Code>vertical</Code> prop, which will render its contents
          vertically, rather than the standard horizontal styling.
        </p>
        {navExamples.orientation.vertical}
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Nav vertical centerLinks style={{ border: "1px solid gray" }}>
  <Nav.Item navkey={0}>Item 1</Nav.Item>
  <Nav.Item navkey={1}>Item 2</Nav.Item>
  <Nav.Item navkey={2}>Item 3</Nav.Item>
</Nav>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="active-item">
        <p style={h2}>activeItem</p>
        <p>
          If a <Code>Nav</Code> has more than one child component, it is
          possible to indicate which item is currently active by passing the{" "}
          <Code>trackActive</Code> prop. This will automatically highlight the
          currently active item when it is clicked.
        </p>
        <p>
          To set the item which is active by default, simply pass the child's{" "}
          <Code>navkey</Code> value to the <Code>defaultActive</Code> prop.
        </p>
        {navExamples.activeItem}
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Nav justify="evenly" trackActive defaultActive={1} centerLinks>
  <Nav.Item navkey={0}>Item 1</Nav.Item>
  <Nav.Item navkey={1}>Item 2</Nav.Item>
  <Nav.Item navkey={2}>Item 3</Nav.Item>
</Nav>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="variants">
        <p style={h2}>Variants</p>

        <p style={cs.subheading}>
          Active <Code>NavItem</Code> components can be colored by passing a{" "}
          <Code>variant</Code> prop with one of the following values:
        </p>
        {navExamples.variants.link}
        {navExamples.variants.primary}
        {navExamples.variants.secondary}
        {navExamples.variants.success}
        {navExamples.variants.warning}
        {navExamples.variants.danger}
        {navExamples.variants.light}
        {navExamples.variants.dark}
      </PageSection>

      <PageSection id="types">
        <p style={h2}>Types</p>

        <p style={cs.subheading}>
          <Code>Nav</Code> contents can be rendered in one of three styles by
          passing their respective name to the <Code>type</Code> prop.
        </p>
        <h3>normal</h3>
        {navExamples.type.normal}
        <h3>pills</h3>
        {navExamples.type.pills}
        <h3>tabs</h3>
        {navExamples.type.tabs}
      </PageSection>

      <PageSection id="using-other-components">
        <p style={h2}>Using Other Components</p>
        <p>
          Any element can technically be passed as a child of a <Code>Nav</Code>
          , however it is recommended to wrap the content in a{" "}
          <Code>NavLink</Code> for the best compatibility.
        </p>
        {navExamples.otherComponents}
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Nav justify="evenly" centerLinks>
  <Nav.Link to="#" navkey={0}>
    NavLink
  </Nav.Link>
  <Nav.Item navkey={1}>
    <Button>Button</Button>
  </Nav.Item>
  <Nav.Item navkey={2}>
    <Checkbox rounded defaultChecked size="lg" />
  </Nav.Item>
</Nav>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>
    </>
  );
};

export default NavDetails;
