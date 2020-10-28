/* React */
import React from "react";
/* Thorium-UI */
import { Block, Layer, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import { FormExample, FormSubcomponents, PageSection } from "components";

export const FormDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };

  return (
    <>
      <h1 style={cs.h1}>Form</h1>

      <PageSection id="sub-component-layout">
        <p style={h2}>Sub-component Layout</p>
        <Layer style={{ textAlign: "center" }} justify="center">
          <Block xs={12} sm={12} md={6} lg={6} xl={6} style={cs.diagram.a}>
            <Layer justify="center">
              <Block>
                <p>Form</p>
              </Block>
              <Block all={12} vertical style={cs.diagram.b}>
                <p>Group</p>
                <Layer justify="center">
                  <Block all={12} style={cs.diagram.c}>
                    <p>Field</p>
                    <Layer>
                      <Block all={12} style={cs.diagram.d}>
                        <p>Input</p>
                      </Block>
                    </Layer>
                  </Block>
                  <Block all={12} style={cs.diagram.c}>
                    <p>Field</p>
                    <Layer>
                      <Block all={12} style={cs.diagram.d}>
                        <p>Input</p>
                      </Block>
                    </Layer>
                  </Block>
                </Layer>
              </Block>
            </Layer>
          </Block>
        </Layer>
      </PageSection>

      <PageSection id="sub-components">
        <p style={h2}>Sub-components</p>
        <FormSubcomponents />
      </PageSection>

      <PageSection id="example">
        <p style={h2}>Example</p>
        <FormExample />
      </PageSection>
    </>
  );
};
export default FormDetails;
