import { colors, Themes } from "thorium-ui";

const customThemes = { ...Themes };

const customLight = {
  topNav: { backgroundColor: colors.light.primaryHover },
  footer: { backgroundColor: colors.neutral.w2 },
  sideMenu: {
    backgroundColor: colors.neutral.w4,
    boxShadow: `2px 0px 0px 0px ${colors.light.primaryHover}`,
  },
  h2: { color: colors.neutral.b3 },
  iconFill: colors.neutral.b0,
};

const customDark = {
  topNav: { backgroundColor: colors.neutral.b3 },
  footer: { backgroundColor: colors.neutral.b5 },
  sideMenu: {
    backgroundColor: colors.neutral.b3,
    boxShadow: "2px 0px 2px 0px #000000aa",
  },
  h2: { color: colors.neutral.w2 },
  iconFill: colors.neutral.w4,
};

customThemes.dark = { ...customThemes.dark, ...customDark };
customThemes.light = { ...customThemes.light, ...customLight };

export default customThemes;
