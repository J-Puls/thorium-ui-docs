/* React */
import React from "react";
/* Thorium-UI */
import { Code, useCustomStyles, useTheme } from "thorium-ui";
/* Custom Components */
import { PageBody } from "components";

export const HooksDetails = () => {
  const theme = useTheme();
  const cs = useCustomStyles();
  const h2 = { ...cs.h2, ...theme.h2 };

  return (
    <PageBody>
      <p style={cs.h1}>Hooks</p>
      <span style={cs.subheading}>
        Several custom hook functions are provided to easily access different
        parts of the <Code>ThoriumRoot</Code> state at any time.
      </span>

      <p style={h2} id="useCustomStyles">
        useCustomStyles
      </p>
      <p>
        Returns the <Code>customStyles</Code> object passed to{" "}
        <Code>ThoriumRoot</Code>.
      </p>
      <hr />
      <p style={h2} id="useMobileStatus">
        useMobileStatus
      </p>
      <p>
        Returns a boolean value indicating weather or not the app is running on
        a mobile device.
      </p>
      <hr />
      <p style={h2} id="useRouterEnabledStatus">
        useRouterEnabledStatus
      </p>
      <p>
        Returns a boolean value indicating weather <Code>react-router</Code> has
        been enabled on <Code>ThoriumRoot</Code>.
      </p>
      <hr />
      <p style={h2} id="useTheme">
        useTheme
      </p>
      <p>
        Returns the full state of the current <Code>Theme</Code>, including
        customThemes.
      </p>
      <hr />
      <p style={h2} id="useThemeColors">
        useThemeColors
      </p>
      <p>
        Returns an object containing the color palette for the current{" "}
        <Code>Theme</Code>.
      </p>
      <hr />
      <p style={h2} id="useThemeName">
        useThemeName
      </p>
      <p>
        Returns a string containing the name of the current <Code>Theme</Code>.
      </p>
      <hr />
      <p style={h2} id="useThemePreference">
        useThemePreference
      </p>
      <p>
        Returns a string containing the name of the user's current device theme
        preference (<Code>"dark"</Code> or <Code>"light"</Code>).
      </p>
      <hr />
      <p style={h2} id="useTouchStatus">
        useTouchStatus
      </p>
      <p>
        Returns a boolean value indicating weather or not the app is running on
        a device with touch capabilities.
      </p>
      <hr />
      <p style={h2} id="useViewportSize">
        useViewportSize
      </p>
      <p>
        Returns an object containing the current <Code>viewport</Code>{" "}
        dimensions.
      </p>
      <hr />
      <p style={h2} id="useViewportSizeName">
        useViewportSizeName
      </p>
      <p>
        Returns a string containing the current <Code>viewportSizeName</Code>.
      </p>
      <hr />
    </PageBody>
  );
};
export default HooksDetails;
