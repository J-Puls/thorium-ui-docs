/* React */
import React from "react";
/* Thorium-UI */
import {
  Block,
  Code,
  Layer,
  Picture,
  useCustomStyles,
  useTheme,
} from "thorium-ui";
/* Custom Components */
import { PageBody } from "components";
/* Assets */
import demoImg1 from "assets/images/parrot2.webp";
import demoImg2 from "assets/images/parrot1.webp";

export const PictureDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <PageBody>
      <p style={cs.h1}>Picture</p>
      <p style={cs.subheading}>
        The <Code>Picture</Code> component allows for quick implementation of
        popular image styles.
      </p>
      <p style={h2}>Sizing</p>
      <p style={cs.subheading}>
        To scale the <Code>Picture</Code> with its parent, use the{" "}
        <Code>fluid</Code> prop.
      </p>

      <Layer style={{ textAlign: "center" }}>
        <Block xs={12} sm={12} md={6} lg={6} xl={6}>
          <Picture src={demoImg1} fluid="half" alt="demo-image-1" />
          <p>half</p>
        </Block>
        <Block xs={12} sm={12} md={6} lg={6} xl={6}>
          <Picture src={demoImg1} fluid="full" alt="demo-image-1" />
          <p>full</p>
        </Block>
      </Layer>

      <p style={h2}>Borders</p>
      <p style={cs.subheading}>
        <Code>Picture</Code> components have two preset border-radius options.
      </p>

      <Layer justify="evenly" style={{ textAlign: "center" }}>
        <Block all={4} vertical>
          <Picture src={demoImg2} fluid="full" round alt="demo-image-2" />
          <p>Round</p>
        </Block>
        <Block all={4} vertical>
          <Picture src={demoImg2} fluid="full" rounded alt="demo-image-2" />
          <p>Rounded</p>
        </Block>
      </Layer>
    </PageBody>
  );
};
