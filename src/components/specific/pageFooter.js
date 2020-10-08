import React from "react";
import { Footer, Block, Link, ThoriumConsumer } from "thorium-ui";

export const PageFooter = (props) => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      return (
        <Footer
          {...props}
          justify="center"
          style={{ paddingBottom: "3rem", textAlign: "center" }}
        >
          <Block all={12} style={{ marginBottom: "1rem" }}>
            <h2>More Information</h2>
            <Link
              href="https://github.com/J-Puls/thorium-ui"
              asAnchor
              target="_blank"
              title="GitHub Repository"
            >
              &nbsp;Official GitHub Repository
            </Link>
          </Block>
          <Block all={12}>
            <span>
              <span style={cs.subheading}>Developed by: </span>{" "}
              <Link
                target="_blank"
                asAnchor
                href="https://jpuls.dev"
                title="Developer Portfolio"
                style={{ boxShadow: `0 2px 0 0 blue` }}
              >
                Jeffrey Puls
              </Link>
            </span>
          </Block>
        </Footer>
      );
    }}
  </ThoriumConsumer>
);

export default PageFooter;
