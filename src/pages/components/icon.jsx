/* React */
import React from "react";
/* Thorium-UI */
import {
  Block,
  Code,
  Layer,
  Link,
  useCustomStyles,
  useTheme,
} from "thorium-ui";
/* Custom Components */
import {
  HCodeBlock,
  IconExample,
  PageBody,
  PageSection,
  SampleCodeDropdown,
} from "components";

export const IconDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <PageBody>
      <p style={cs.h1}>Icon</p>
      <p style={cs.subheading}>
        The <Code>Icon</Code> component provides a quick and easy way to
        incorporate dynamic <Code>SVG</Code> based icons anywhere in your
        application.
      </p>
      <PageSection id="sprite-sheet">
        <p style={h2}>Sprite Sheet</p>
        <p>
          In order for Icons to work properly, it is highly recommended to use
          an <Code>SVG sprite sheet</Code> formatted like the example below.{" "}
          <Link href="https://w3bits.com/svg-sprites/" asAnchor target="_blank">
            Learn more about this topic here.
          </Link>
        </p>
        <Layer>
          <Block all={12}>
            <HCodeBlock language="xml">
              {`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Chevron Up -->
  <symbol id="chevron-up" viewBox="0 0 24 24">
      <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
  </symbol>
  <!-- Chevron Down -->
  <symbol id="chevron-down" viewBox="0 0 24 24">
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
  </symbol>
</svg>`}
            </HCodeBlock>
          </Block>
        </Layer>
      </PageSection>

      <PageSection id="usage">
        <p style={h2}>Usage</p>
        <p style={cs.subheading}>
          With the sprites defined in a sprite sheet, using them as an{" "}
          <Code>Icon</Code> is very simple.
        </p>
        <ol>
          <li>Import the sprite sheet into your component</li>
          <li>
            Pass the desired sprite's <Code>fragment identifier</Code> to the{" "}
            <Code>src</Code> prop
          </li>
          <li>
            Specify <Code>width</Code>, <Code>height</Code>, and{" "}
            <Code>fill</Code> props
          </li>
        </ol>
      </PageSection>

      <PageSection id="example">
        <p style={h2}>Example</p>
        <IconExample />
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Layer justify="center">
  <Block all={6} justify="around">
      <Button variant="dark">
          <Icon src={\`\${Icons}#chevron-up\`} width={24} height={24} fill="dodgerblue"/>
      </Button>
      <Button variant="dark">
          <Icon src={\`\${Icons}#chevron-down\`} width={24} height={24} fill="dodgerblue"/>
      </Button>
  </Block>
</Layer>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>
    </PageBody>
  );
};

export default IconDetails;
