import React from "react";
import { Layer, Block, Code, ThoriumConsumer } from "thorium-ui";
import { PageBody } from "components";
export const PaletteDetails = () => {
  return (
    <ThoriumConsumer>
      {(context) => {
        const cs = context.customStyles;
        const h2 = { ...cs.h2, ...context.theme.h2 };
        const themeColors = [];
        const neutralColors = [];
        for (let key in context.theme.colors) {
          themeColors.push({ name: key, value: context.theme.colors[key] });
        }
        for (let key in context.colors.neutral) {
          neutralColors.push({ name: key, value: context.colors.neutral[key] });
        }

        return (
          <PageBody>
            <h1>Color Palette</h1>
            <p style={cs.subheading}>
              By default, Thorium-UI contains three main color palettes:{" "}
              <Code>dark</Code> and <Code>light</Code> which coincide with their
              respective themes, and <Code>neutral</Code> which is universal
              between themes. Any of these colors can be overridden within the{" "}
              <Code>customThemes.js</Code> file.
              <br />
              <br />
              Try toggling theme modes and note how it affects the color
              palettes below.
            </p>

            <Layer>
              <Block all={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <h2 style={h2}>Themed Colors: {`${context.theme.name}`}</h2>
              </Block>

              {themeColors.map(
                ({ name, value }) =>
                  name !== "code" && (
                    <Block xs={6} sm={4} md={4} lg={4} xl={3} key={name}>
                      <h4>
                        {name}
                        <br />
                        {value}
                      </h4>
                      <Block
                        all={12}
                        justify="center"
                        rounded
                        style={{ height: 50, backgroundColor: value }}
                      ></Block>
                    </Block>
                  )
              )}
              <Block all={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <h2 style={h2}>Neutral Colors</h2>
              </Block>
              {neutralColors.map(({ name, value }) => (
                <Block xs={6} sm={4} md={4} lg={4} xl={3} key={name}>
                  <h4>
                    {name}
                    <br />
                    {value}
                  </h4>
                  <Block
                    all={12}
                    justify="center"
                    rounded
                    style={{ height: 50, backgroundColor: value }}
                  ></Block>
                </Block>
              ))}
            </Layer>
          </PageBody>
        );
      }}
    </ThoriumConsumer>
  );
};
export default PaletteDetails;
