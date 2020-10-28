/* React */
import React, { useContext, useState, useEffect, useRef } from "react";
/* Thorium-UI */
import {
  Block,
  BurgerButton,
  Icon,
  Layer,
  ThemeToggle,
  useTheme,
  useThemeName,
  useViewportSizeName,
  ThoriumContext,
} from "thorium-ui";
/* Custom Components */
import { MobileMenu } from "./mobileMenu";

/* Assets */
import logos from "assets/logos.svg";

export const TopNav = () => {
  const cs = useContext(ThoriumContext).customStyles;
  const burger = useRef();
  const theme = useTheme();
  const themeName = useThemeName();
  const viewportSizeName = useViewportSizeName();

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <Layer
        sticky
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
                  fill="#ffffff"
                  height={30}
                  src={`${logos}#thorium-logo-full`}
                  width={130}
                />
              </a>
            </Block>

            <Block
              justify="end"
              style={{ paddingRight: 0, fontStyle: "italic" }}
            >
              <ThemeToggle
                size="lg"
                offState="dark"
                style={{
                  marginRight: 10,
                  marginBottom: 10,
                }}
                label={
                  ["md", "lg", "xl"].includes(viewportSizeName) ? themeName : ""
                }
              />

              {!["xs", "sm"].includes(viewportSizeName) && (
                <a
                  href="https://github.com/J-Puls/thorium-ui"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="GitHub"
                >
                  <Icon
                    fill="#ffffff"
                    height={30}
                    src={`${logos}#gitLogo`}
                    width={30}
                  />
                </a>
              )}
              {["xs", "sm"].includes(viewportSizeName) && (
                <BurgerButton
                  aria-label="mobile-menu-trigger"
                  iconFill="#ffffff"
                  id="mobileMenuBtn"
                  overrideFill
                  ref={burger}
                  targetID="mobileMenu"
                  variant="link"
                />
              )}
            </Block>
          </Layer>
        </Block>
      </Layer>
      <MobileMenu
        toggleBurger={() => {
          burger.current.toggle();
        }}
        onToggle={(state) => setMenuOpen(state)}
        isOpen={menuOpen}
      />
    </>
  );
};

export default TopNav;
