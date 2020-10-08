import React from "react";
import { Layer, Block, Button, ThoriumConsumer } from "thorium-ui";
import { PageBody } from "components";

const Error404 = () => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      const h2 = { ...cs.h2, ...context.theme.h2 };
      return (
        <PageBody>
          <Layer justify="center" style={{ minHeight: "75vh" }}>
            <Block vertical all={10} style={{ textAlign: "center" }}>
              <p style={{ ...cs.h1, color: context.theme.colors.danger }}>
                404 Error!
              </p>
              <p style={h2}>Hmm... Looks like that page doesn't exist.</p>
              <br />
              <Button variant="dark" onClick={() => window.history.back()}>
                Previous Page
              </Button>
            </Block>
          </Layer>
        </PageBody>
      );
    }}
  </ThoriumConsumer>
);

export default Error404;
