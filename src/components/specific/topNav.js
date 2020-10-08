import React, { useContext } from "react";
import { MobileMenu } from "./mobileMenu";
import logos from "assets/logos.svg";
import {
  Block,
  BurgerButton,
  Icon,
  Layer,
  ThemeToggle,
  useTheme,
  useViewportSizeName,
  ThoriumContext,
} from "thorium-ui";

export const TopNav = () => {
  const cs = useContext(ThoriumContext).customStyles;
  let burger;
  const theme = useTheme();
  const viewportSizeName = useViewportSizeName();
  const logoFill = theme.name === "dark" ? "#ffffff" : "#000000";
  return (
    <>
      <Layer
        sticky
        // translucent
        style={{
          ...cs.topNav,
          ...theme.topNav,
        }}
      >
        <Block all={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Layer justify="between">
            <Block style={{ paddingLeft: 0, paddingRight: 0 }}>
              <a href="/" rel="noopener noreferrer" title="Home">
                <Icon
                  width={130}
                  height={30}
                  src={`${logos}#thorium-logo-full`}
                  fill={logoFill}
                />
              </a>
            </Block>

            <Block justify="end" style={{ paddingRight: 0 }}>
              <ThemeToggle
                size="lg"
                offState="dark"
                style={{
                  marginRight: 10,
                  marginBottom: 10,
                }}
                label={
                  ["md", "lg", "xl"].includes(viewportSizeName) && (
                    <em>{theme.name}</em>
                  )
                }
              />

              {!["xs", "sm"].includes(viewportSizeName) && (
                <a
                  href="https://github.com/J-Puls/thorium-UI"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="GitHub"
                >
                  <Icon
                    width={30}
                    height={30}
                    src={`${logos}#gitLogo`}
                    fill={logoFill}
                  />
                </a>
              )}
              {["xs", "sm"].includes(viewportSizeName) && (
                <BurgerButton
                  aria-label="mobile-menu-trigger"
                  targetID="mobileMenu"
                  id="mobileMenuBtn"
                  variant="link"
                  overrideFill
                  iconFill={theme.colors.neutral.w4}
                  ref={(el) => (burger = el)}
                />
              )}
            </Block>
          </Layer>
        </Block>
      </Layer>
      {["xs", "sm"].includes(viewportSizeName) && (
        <MobileMenu toggleBurger={() => burger.toggle()} />
      )}
    </>
  );
};

export default TopNav;
