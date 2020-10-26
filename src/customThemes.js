import { colors, Themes } from "thorium-ui";

const light = {
  h2: {
    color: colors.neutral.b3,
  },
  iconFill: colors.neutral.b0,
  pageFooter: {
    backgroundColor: colors.neutral.w3,
  },
  sideMenu: {
    backgroundColor: colors.neutral.w3,
    boxShadow: `2px 0px 0px 0px ${colors.light.primaryHover}`,
  },
  topNav: {
    backgroundColor: colors.light.primaryHover,
  },
};

const dark = {
  body: {
    ...Themes.dark.body,
    "background-color": colors.neutral.b0,
  },
  topNav: { backgroundColor: colors.neutral.b2 },
  metaNav: {
    boxShadow: "inset 2px 0px 2px 0px #000000aa",
  },
  pageFooter: { backgroundColor: colors.neutral.b1 },
  sideMenu: {
    backgroundColor: colors.neutral.b1,
    boxShadow: "inset 2px 0px 2px 0px #000000aa",
  },
  iconFill: colors.neutral.w4,
};

const customThemes = { dark, light };
export default customThemes;
