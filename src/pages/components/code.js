import React from "react";
import { Code, Layer, Block, ThoriumConsumer } from "thorium-ui";
import { PageBody } from "components";

export const CodeDetails = () => {
  return (
    <ThoriumConsumer>
      {(context) => {
        const cs = context.customStyles;
        const h2 = { ...cs.h2, ...context.theme.h2 };
        return (
          <PageBody>
            <p style={cs.h1}>Code</p>
            <p style={cs.subheading}>
              A pre-styled {`&`} themed wrapper used to highlight keywords
              within text.
            </p>
            <p style={h2}>Example</p>
            <p>
              Observe the following text examples, the first using plain text,
              the second using <Code>Code</Code> wrappers to highlight important
              keywords.
            </p>
            <Layer justify="evenly">
              <Block xs={12} sm={12} md={5} lg={5} xl={5} style={cs.diagram.b}>
                <p>
                  In Javascript, it is possible to convert the contents of a
                  String to all lowercase characters. To accomplish this, call
                  the toLower() function on the desired String.
                </p>
              </Block>
              <Block xs={12} sm={12} md={5} lg={5} xl={5} style={cs.diagram.c}>
                <p>
                  In Javascript, it is possible to convert the contents of a{" "}
                  <Code>String</Code> to all lowercase characters. To accomplish
                  this, call the <Code>toLower()</Code> function on the desired{" "}
                  <Code>String</Code>.
                </p>
              </Block>
            </Layer>
            <p>
              Highlighting important keywords within the block of text can be an
              effective means of drawing attention to the important bits of
              information within.
            </p>
          </PageBody>
        );
      }}
    </ThoriumConsumer>
  );
};

export default CodeDetails;
