import React from "react";
import { Button, Checkbox, Code, Nav, ThoriumConsumer } from "thorium-ui";
import { HCodeBlock, NavDiagram, PageBody } from "components";

export const NavDetails = () => (
  <ThoriumConsumer>
    {(context) => {
      const cs = context.customStyles;
      const h2 = { ...cs.h2, ...context.theme.h2 };
      return (
        <PageBody>
          <h1 style={cs.h1}>Nav</h1>
          <p style={cs.subheading}>
            Navs provide a pre-styled navigation menu that can be included in
            any layout component.
          </p>
          <p style={h2}>Subcomponent Layout</p>
          <NavDiagram />
          <p style={h2}>Basic Nav</p>

          <Nav justify="evenly" centerLinks trackActive>
            <Nav.Link to="#" navkey={0}>
              Link 1
            </Nav.Link>
            <Nav.Link to="#" navkey={1}>
              Link 2
            </Nav.Link>
            <Nav.Link to="#" navkey={2}>
              Link 3
            </Nav.Link>
          </Nav>

          <HCodeBlock language="html">
            {`<Nav justify="evenly">\n` +
              `   <Nav.Link>Link 1</Nav.Link>\n` +
              `   <Nav.Link>Link 2</Nav.Link>\n` +
              `   <Nav.Link>Link 3</Nav.Link>\n` +
              `</Nav>`}
          </HCodeBlock>
          <p style={h2}>Vertical Nav</p>
          <p>
            Because it is a flexbox item at its core, the Nav component accepts
            a <Code>vertical</Code> prop, which will render the nav items
            vertically, rather than the standard horizontal styling.
          </p>
          <Nav vertical centerLinks>
            <Nav.Link to="#">Link 1</Nav.Link>
            <Nav.Link to="#">Link 2</Nav.Link>
            <Nav.Link to="#">Link 3</Nav.Link>
          </Nav>
          <HCodeBlock language="html">
            {`<Nav vertical centerLinks>\n` +
              `   <Nav.Link>Link 1</Nav.Link>\n` +
              `   <Nav.Link>Link 2</Nav.Link>\n` +
              `   <Nav.Link>Link 3</Nav.Link>\n` +
              `</Nav>`}
          </HCodeBlock>
          <p style={h2}>Active Item</p>
          <p>
            If a <Code>Nav</Code> has more than one child component, it is
            possible to indicate which item is currently active via the{" "}
            <Code>trackActive</Code> prop. This will automatically switch the{" "}
            <Code>activeItem</Code> state of the <Code>Nav</Code> when a new
            item is clicked.
          </p>
          <p>
            To set the item which is active by default, simply supply a{" "}
            <Code>defaultActive</Code>
            prop with the index of the desired item.
          </p>
          <Nav justify="evenly" trackActive defaultActive={1} centerLinks>
            <Nav.Link to="#">Link 1</Nav.Link>
            <Nav.Link to="#">Link 2</Nav.Link>
            <Nav.Link to="#">Link 3</Nav.Link>
          </Nav>
          <HCodeBlock language="html">
            {`<Nav justify="evenly" trackActive defaultActive={1} centerLinks>\n` +
              `   <Nav.Link>Link 1</Nav.Link>\n` +
              `   <Nav.Link>Link 2</Nav.Link>\n` +
              `   <Nav.Link>Link 3</Nav.Link>\n` +
              `</Nav>`}
          </HCodeBlock>
          <p style={h2}>asAnchor</p>
          <p>
            In cases where you do not need / want a React-Router Link component,
            passing the <Code>asAnchor</Code> prop will create a vanilla anchor
            tag instead.
          </p>
          <h2>NavItem</h2>
          <p>
            <Code>NavItem</Code> components provide a simple padded wrapper to
            encapsulate different items within a nav. A <Code>NavItem</Code> can
            contain any component, as it renders as a custom <Code>div</Code>{" "}
            element.
          </p>
          <h2>NavLink</h2>
          <p>
            A <Code>NavLink</Code> renders a styled React Router{" "}
            <Code>Link</Code> component. Because of this, React Router must be
            installed as a dependency in order for <Code>NavLink</Code> to
            render.
          </p>
          <HCodeBlock>{`npm install --save react-router react-router-dom`}</HCodeBlock>
          <h2>Using other components</h2>
          <p>
            Because the <Code>NavItem</Code> component is rendered as a{" "}
            <Code>div</Code> element, it is possible to use just about any other
            valid HTML element or React component in place of{" "}
            <Code>NavLink</Code>.
          </p>

          <Nav justify="evenly" centerLinks>
            <Nav.Link to="#">NavLink</Nav.Link>
            <Nav.Item>
              <Button>Button</Button>
            </Nav.Item>
            <Nav.Item all={6}>
              <Checkbox rounded defaultChecked size="lg"></Checkbox>
            </Nav.Item>
          </Nav>

          <HCodeBlock language="html">
            {`<Nav justify="evenly" centerLinks>\n` +
              ` <Nav.Link to="#">NavLink</Nav.Link>\n` +
              ` <Nav.Item>\n` +
              `   <Button>Button</Button>\n` +
              ` </Nav.Item>\n` +
              ` <Nav.Item all={6}>\n` +
              `   <Checkbox rounded defaultChecked size="lg"></Checkbox>\n` +
              ` </Nav.Item>\n` +
              `</Nav>`}
          </HCodeBlock>
        </PageBody>
      );
    }}
  </ThoriumConsumer>
);
export default NavDetails;
