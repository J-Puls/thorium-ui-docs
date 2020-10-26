/* React */
import React from "react";
/* Thorium-UI */
import {
  Block,
  Code,
  Layer,
  colors,
  useCustomStyles,
  useTheme,
} from "thorium-ui";
/* Custom Components */
import { PageBody, PageSection } from "components";

export const PaletteDetails = () => {
  const cs = useCustomStyles();
  const theme = useTheme();
  const h2 = { ...cs.h2, ...theme.h2 };
  const themeColors = [];
  const neutralColors = [];
  for (let key in theme.colors) {
    themeColors.push({ name: key, value: theme.colors[key] });
  }
  for (let key in colors.neutral) {
    neutralColors.push({ name: key, value: colors.neutral[key] });
  }

  return (
    <PageBody>
      <h1>Color Palette</h1>
      <p style={cs.subheading}>
        By default, Thorium-UI contains three main color palettes:{" "}
        <Code>dark</Code> and <Code>light</Code> which coincide with their
        respective themes, and <Code>neutral</Code> which is universal between
        themes. Any of these colors can be overridden within the{" "}
        <Code>customThemes.js</Code> file.
        <br />
        <br />
        Try toggling theme modes and note how it affects the color palettes
        below.
      </p>
      <PageSection id="themed-colors">
        <h2 style={h2}>Themed Colors: {`${theme.name}`}</h2>
        <Layer justify="evenly">
          {themeColors.map(
            ({ name, value }) =>
              name !== "code" && (
                <Block
                  xs={12}
                  sm={5}
                  md={5}
                  lg={5}
                  xl={5}
                  key={name}
                  style={cs.colorSwatch}
                >
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
                  />
                </Block>
              )
          )}
        </Layer>
      </PageSection>
      <PageSection id="neutral-colors">
        <h2 style={h2}>Neutral Colors</h2>
        <Layer>
          {neutralColors.map(({ name, value }) => (
            <Block
              xs={12}
              sm={5}
              md={5}
              lg={5}
              xl={5}
              key={name}
              style={cs.colorSwatch}
            >
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
      </PageSection>
    </PageBody>
  );
};
export default PaletteDetails;
