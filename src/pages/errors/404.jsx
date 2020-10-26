/* React */
import React from "react";
/* Thorium-UI */
import { Block, Button, Layer, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import { PageBody } from "components";

const Error404 = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };

  return (
    <PageBody>
      <Layer justify="center" style={{ minHeight: "75vh" }}>
        <Block vertical all={10} style={{ textAlign: "center" }}>
          <p style={{ ...cs.h1, color: theme.colors.danger }}>404 Error!</p>
          <p style={h2}>Hmm... Looks like that page doesn't exist.</p>
          <br />
          <Button variant="dark" onClick={() => window.history.back()}>
            Previous Page
          </Button>
        </Block>
      </Layer>
    </PageBody>
  );
};

export default Error404;
