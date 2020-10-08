import React from "react";
import { Block, Code, Layer, ThoriumConsumer } from "thorium-ui";
import { FormSubcomponents, FormExample, PageBody } from "components";

export const FormDetails = () => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      const h2 = { ...cs.h2, ...context.theme.h2 };
      const diagram = cs.diagram;
      return (
        <PageBody>
          <h1>Form</h1>
          <p>
            Thorium-UI contains a selection of theme-able, responsive{" "}
            <Code>Form</Code> components to quickly and easily make an
            attractive, modern form.
          </p>
          <p style={h2}>Subcomponent Layout</p>
          <Layer style={{ textAlign: "center" }} justify="center">
            <Block xs={12} sm={12} md={6} lg={6} xl={6} style={diagram.a}>
              <Layer justify="center">
                <Block>
                  <p>Form</p>
                </Block>
                <Block all={12} vertical style={diagram.b}>
                  <p>Group</p>
                  <Layer justify="center">
                    <Block all={12} style={diagram.c}>
                      <p>Field</p>
                      <Layer>
                        <Block all={12} style={diagram.b}>
                          <p>Input</p>
                        </Block>
                      </Layer>
                    </Block>
                    <Block all={12} style={diagram.c}>
                      <p>Field</p>
                      <Layer>
                        <Block all={12} style={diagram.b}>
                          <p>Input</p>
                        </Block>
                      </Layer>
                    </Block>
                  </Layer>
                </Block>
              </Layer>
            </Block>
          </Layer>

          <p style={h2}>Subcomponents</p>
          <FormSubcomponents />

          <p style={h2}>Example</p>
          <FormExample />
        </PageBody>
      );
    }}
  </ThoriumConsumer>
);
export default FormDetails;
