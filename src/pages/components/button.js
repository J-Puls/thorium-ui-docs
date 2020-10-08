import React from "react";
import { Block, Button, Code, Layer, ThoriumConsumer } from "thorium-ui";
import {
  PageBody,
  HCodeBlock,
  ButtonAPI,
  SampleCodeDropdown,
} from "components";

export const ButtonDetails = () => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      const h2 = { ...cs.h2, ...context.theme.h2 };
      return (
        <PageBody>
          <p style={cs.h1}>Button</p>
          <p style={cs.subheading}>
            Throium-UI contains a variety of pre-styled, theme-dependant buttons
            to fit any purpose.
          </p>
          <p style={h2}>Variants</p>
          <p>
            To incorporate a <Code>Button</Code> style, include one of the
            following <Code>variant</Code> props. If none is given, the button
            will default to <Code>primary</Code>.
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

          <p style={h2}>Sizing</p>
          <p>
            To change the size of a <Code>Button</Code>, give it one of the
            following <Code>size</Code> props. If none is give, it will default
            to <Code>normal</Code>.
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

          <p style={h2}>Disabled</p>
          <p>
            As its name implies, the <Code>isDisabled</Code> prop disables the
            button, as well as adding a "disabled" appearance.
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

          <p style={h2}>Stretch</p>
          <p>
            The <Code>stretch</Code> prop will cause the button to fill the
            entire width of its parent.
          </p>
          <Layer justify="center">
            <Button stretch>Stretched</Button>
          </Layer>
          <SampleCodeDropdown>
            <HCodeBlock>{`<Button stretch>Stretched</Button>`}</HCodeBlock>
          </SampleCodeDropdown>

          <p style={h2}>Animated</p>
          <p>
            The <Code>animated</Code> prop will add a subtle animation when the
            button is clicked to improve feedback to the user.
          </p>
          <Layer justify="center">
            <Button animated>Click Me!</Button>
          </Layer>
          <SampleCodeDropdown>
            <HCodeBlock>
              {`<Button size="lg" animated>Click Me!</Button>`}
            </HCodeBlock>
          </SampleCodeDropdown>

          <p style={h2}>API</p>
          <Layer justify="center" style={cs.mx0}>
            <Block
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={8}
              justify="center"
              vertical
              style={cs.px0}
            >
              <h3>Button</h3>
              <ButtonAPI />
            </Block>
          </Layer>
        </PageBody>
      );
    }}
  </ThoriumConsumer>
);
