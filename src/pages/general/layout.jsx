/* React */
import React from "react";
/* Thorium-UI */
import { Block, Code, Layer, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import {
  BlockAPI,
  BlockSizingExample,
  BreakpointsTable,
  HCodeBlock,
  LayerAPI,
  LayerExample,
  LayoutDiagram,
  
  PageSection,
  SampleCodeDropdown,
} from "components";

export const LayoutDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  return (
    <>
      <p style={cs.h1}>Layout Basics</p>
      <p style={cs.subheading}>
        Thorium-UI uses a flex-box-based grid system to enable responsive layout
        design. The three basic building blocks of Thorium-UI components are{" "}
        <Code>Container</Code>, <Code>Layer</Code>, and <Code>Block</Code>.
      </p>

      <PageSection id="component-layout">
        <p style={h2}>Component Layout</p>
        <LayoutDiagram />
      </PageSection>

      <PageSection id="container">
        <h2 style={h2}>Container</h2>
        <p style={cs.subheading}>
          A responsive, centered and padded wrapper for page contents. The
          component's <Code>max-width</Code> is calculated from the current
          viewport width, and will scale appropriately to ensure proper spacing
          regardless of viewport size.
        </p>
      </PageSection>

      <PageSection id="layer">
        <h2 style={h2}>Layer</h2>
        <p style={cs.subheading}>
          A <Code>Layer</Code> defines a horizontal row in the page grid,
          segmented into 12 blocks.
        </p>
        <LayerExample />
      </PageSection>

      <PageSection id="block">
        <p style={h2}>Block</p>
        <p style={cs.subheading}>
          A <Code>Block</Code> defines a column within a Layer. Each{" "}
          <Code>Block</Code> can occupy up to 12 possible spaces in each{" "}
          <Code>Layer</Code>, in increments of 1.
        </p>
      </PageSection>

      <PageSection id="breakpoints">
        <p style={h2}>Breakpoints</p>
        <p>
          In order to provide a consistently responsive layout, Thorium-UI uses
          pre-determined breakpoints calculated from the viewport width to
          trigger component updates. The current viewport size and name can be
          accessed anywhere via <Code>ThoriumContext</Code>.
        </p>
        <BreakpointsTable />
      </PageSection>

      <PageSection id="block-sizing">
        <p style={h2}>Defining Block Sizing</p>
        <p>
          By default, if no sizing props are defined, a <Code>Block</Code> will
          expand to fill all available space in a <Code>Layer</Code> that is not
          occupied by another component.
        </p>
        <p>
          <Code>Block</Code> sizing is defined by supplying any combination of
          breakpoint props with an integer corresponding to the number of spaces
          it should occupy within the <Code>Layer</Code>.
        </p>
        <p>
          Using the <Code>all</Code> prop will override any other sizing props
          and apply the corresponding size at all breakpoints.
        </p>
        <BlockSizingExample />
        <SampleCodeDropdown>
          <HCodeBlock language="html">
            {`<Layer style={{ textAlign: "center" }}>\n` +
              `  <Block xs={6} sm={5} md={4} lg={3} xl={2} style={diagram.b}>\n` +
              `    <p>Block 1 - Explicit sizing</p>\n` +
              `  </Block>\n` +
              `  <Block style={diagram.b}>\n` +
              `    <p>Block 2 - Variable sizing</p>\n` +
              `  </Block>\n` +
              `  <Block style={diagram.b} all={12}>\n` +
              `    <p>Block 3 - Universal sizing</p>\n` +
              `  </Block>\n` +
              `</Layer>`}
          </HCodeBlock>
        </SampleCodeDropdown>
      </PageSection>

      <PageSection id="layout-api">
        <p style={h2}>API</p>
        <Layer justify="center" style={{ marginLeft: 0, marginRight: 0 }}>
          <Block
            xs={12}
            sm={12}
            md={12}
            lg={10}
            xl={8}
            justify="center"
            vertical
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <h3>Layer</h3>
            <LayerAPI />
            <h3>Block</h3>
            <BlockAPI />
          </Block>
        </Layer>
      </PageSection>
    </>
  );
};
