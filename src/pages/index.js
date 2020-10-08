import { ButtonDetails } from "./components/button";
import { CodeBlockDetails } from "./components/codeBlock";
import { DropdownDetails } from "./components/dropdown";
import { FormDetails } from "./components/form";
import { GettingStartedDetails } from "./general/gettingStarted";
import { PictureDetails } from "./components/picture";
import { InputDetails } from "./components/input";
import { LayoutDetails } from "./general/layout";
import { NavDetails } from "./components/nav";
import { StylesDetails } from "./general/styles";
import { ThemeControlDetails } from "./general/themeControl";
import { CustomThemesDetails } from "./general/themeCustomization";
import { test } from "./test";

export const generalLinks = [
  { text: "Getting Started", route: "/" },
  { text: "Theme Control", route: "/theme-control" },
  { text: "Custom Themes", route: "/theme-customization" },
  { text: "Layout", route: "/layout" },
  { text: "Color Palette", route: "/palette" },
  { text: "Custom Styling", route: "/styles" },
];

export const componentLinks = [
  { text: "BurgerButton", route: "/burgerbutton" },
  { text: "Button", route: "/button" },
  { text: "Code", route: "/code" },
  { text: "CodeBlock", route: "/codeblock" },
  { text: "Dropdown", route: "/dropdown" },
  { text: "Form", route: "/form" },
  { text: "Icon", route: "/icon" },
  { text: "Picture", route: "/picture" },
  { text: "Input", route: "/input" },
  { text: "Nav", route: "/nav" },
  { text: "ToggleSwitch", route: "/toggleSwitch" },
  { text: "Table", route: "/table" },
  { text: "Footer", route: "/footer" },
];

export default {
  ButtonDetails,
  CodeBlockDetails,
  DropdownDetails,
  FormDetails,
  GettingStartedDetails,
  PictureDetails,
  InputDetails,
  LayoutDetails,
  NavDetails,
  StylesDetails,
  ThemeControlDetails,
  CustomThemesDetails,
  test,
};
