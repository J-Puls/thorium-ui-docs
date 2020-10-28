/* React */
import React, { useState } from "react";
/* Thorium-UI */
import { ThoriumRoot, Layer, MessageBox, Link } from "thorium-ui";
/* Customization */
import customStyles from "./customStyles";
import customThemes from "./customThemes";
/* React-Router-DOM */
import { BrowserRouter as Router } from "react-router-dom";
/* Custom Components */
import { TopNav, SideMenu, MetaNav, PageBody } from "components";

export const App = () => {
  const [messages, setMessages] = useState([
    {
      props: {
        variant: "primary",
        contents: (
          <span>
            Want to help develop Thorium-UI? Check out the
            <Link
              useParentColor
              asAnchor
              href="https://github.com/J-Puls/thorium-ui"
            >
              official GitHub repo
            </Link>{" "}
            to learn more, your help is appreciated!
          </span>
        ),
      },
    },
  ]);

  const handleRemove = (id) => {
    let messagesCopy = [...messages];
    messagesCopy[id].props.isDismissed = true;
    setMessages(messagesCopy);
  };

  return (
    <ThoriumRoot
      overrideSysTheme
      defaultTheme="dark"
      enableReactRouter
      customStyles={customStyles}
      customThemes={customThemes}
    >
      <Router>
        <MessageBox messages={messages} onRemove={handleRemove} />
        <TopNav />
        <Layer style={{ marginLeft: 0, marginRight: 0 }}>
          <SideMenu />
          <PageBody />
          <MetaNav />
        </Layer>
      </Router>
    </ThoriumRoot>
  );
};
export default App;
