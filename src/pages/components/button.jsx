/* React */
import React from "react";
/* Thorium-UI */
import { Button, Code, Layer, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import {
  ButtonAPI,
  HCodeBlock,
  PageSection,
  SampleCodeDropdown,
} from "components";

export const ButtonDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <>
      <p style={cs.h1}>Button</p>
      <p style={cs.subheading}>
        Various <Code>Button</Code> combinations are available to suite any
        purpose.
      </p>
      <PageSection id="variants">
        <p style={h2}>Variants</p>
        <p style={cs.subheading}>
          Add one of the following <Code>variant</Code> prop values to alter the
          color of any <Code>Button</Code>.
        </p>
        <Layer justify="evenly">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Button variant="primary">Primary</Button>\n` +
              `<Button variant="secondary">Secondary</Button>\n` +
              `<Button variant="success">Success</Button>\n` +
              `<Button variant="warning">Warning</Button>\n` +
              `<Button variant="danger">Danger</Button>\n` +
              `<Button variant="light">Light</Button>\n` +
              `<Button variant="dark">Dark</Button>\n` +
              `<Button variant="link">Link</Button>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="sizing">
        <p style={h2}>Sizing</p>
        <p style={cs.subheading}>
          <Code>Button</Code> sizing can be either <Code>"lg"</Code>,{" "}
          <Code>"normal"</Code>, or <Code>"sm"</Code>.
        </p>
        <Layer justify="evenly">
          <Button size="lg">Large</Button>
          <Button size="normal">Normal</Button>
          <Button size="sm">Small</Button>
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`
<Button size="lg">Large</Button>
<Button size="normal">Normal</Button>
<Button size="sm">Small</Button>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="disabling">
        <p style={h2}>Disabling</p>
        <p style={cs.subheading}>
          Adding the <Code>isDisabled</Code> prop disables the button, and adds
          a "disabled" appearance.
        </p>
        <Layer justify="evenly">
          <Button variant="primary" isDisabled>
            Primary
          </Button>
          <Button variant="secondary" isDisabled>
            Secondary
          </Button>
          <Button variant="success" isDisabled>
            Success
          </Button>
          <Button variant="warning" isDisabled>
            Warning
          </Button>
          <Button variant="danger" isDisabled>
            Danger
          </Button>
          <Button variant="light" isDisabled>
            Light
          </Button>
          <Button variant="dark" isDisabled>
            Dark
          </Button>
          <Button variant="link" isDisabled>
            Link
          </Button>
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`
<Button variant="primary" isDisabled>Primary</Button>
<Button variant="secondary" isDisabled>Secondary</Button>
<Button variant="success" isDisabled>Success</Button>
<Button variant="warning" isDisabled>Warning</Button>
<Button variant="danger" isDisabled>Danger</Button>
<Button variant="light" isDisabled>Light</Button>
<Button variant="dark" isDisabled>Dark</Button>
<Button variant="link" isDisabled>Link</Button>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="stretch">
        <p style={h2}>Stretch</p>
        <p style={cs.subheading}>
          With the <Code>stretch</Code> prop enabled, the <Code>Button</Code>{" "}
          will fill the entire width of its parent container.
        </p>
        <Layer justify="center">
          <Button stretch>Stretched</Button>
        </Layer>
        <SampleCodeDropdown>
          <HCodeBlock>{`<Button stretch>Stretched</Button>`}</HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="button-api">
        <p style={h2}>API</p>
        <Layer justify="center">
          <ButtonAPI />
        </Layer>
      </PageSection>
    </>
  );
};
