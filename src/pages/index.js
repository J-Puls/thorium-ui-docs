// import { InputDetails } from "./components/input";
// import { PictureDetails } from "./components/picture";
import { ButtonDetails } from "./components/button";
import { CodeBlockDetails } from "./components/codeBlock";
import { CustomStylesDetails } from "./general/customStyles";
import { CustomThemesDetails } from "./general/customThemes";
import { DropdownDetails } from "./components/dropdown";
import { FormDetails } from "./components/form";
import { GettingStartedDetails } from "./general/gettingStarted";
import { LayoutDetails } from "./general/layout";
import { NavDetails } from "./components/nav";
import { ThemeControlDetails } from "./general/themeControl";
import { test } from "./test";

export const generalLinks = [
  { text: "Getting Started", route: "/" },
  { text: "Layout", route: "/layout" },
  { text: "Color Palette", route: "/palette" },
  { text: "Theme Control", route: "/theme-control" },
  { text: "Custom Themes", route: "/custom-themes" },
  { text: "Custom Styles", route: "/custom-styles" },
];

export const componentLinks = [
  { text: "BurgerButton", route: "/burger-button" },
  { text: "Button", route: "/button" },
  { text: "Code", route: "/code" },
  { text: "CodeBlock", route: "/code-block" },
  { text: "Dropdown", route: "/dropdown" },
  { text: "Form", route: "/form" },
  { text: "Icon", route: "/icon" },
  // { text: "Picture", route: "/picture" },
  // { text: "Input", route: "/input" },
  { text: "Nav", route: "/nav" },
  // { text: "ToggleSwitch", route: "/toggle-switch" },
  // { text: "Table", route: "/table" },
  // { text: "Footer", route: "/footer" },
];

export default {
  ButtonDetails,
  CodeBlockDetails,
  CustomStylesDetails,
  CustomThemesDetails,
  DropdownDetails,
  FormDetails,
  GettingStartedDetails,
  // PictureDetails,
  // InputDetails,
  LayoutDetails,
  NavDetails,
  test,
  ThemeControlDetails,
};
