/* React */
import React from "react";
/* Thorium-UI */
import { Code, Table } from "thorium-ui";

export const BlockAPI = () => (
  <Table>
    <Table.Header>
      <Table.Cell header>Prop</Table.Cell>
      <Table.Cell header>Description</Table.Cell>
      <Table.Cell header>Datatype</Table.Cell>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>all</Table.Cell>
        <Table.Cell>
          Defines the component width out of 12 for all breakpoints
        </Table.Cell>
        <Table.Cell>number</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>justify</Table.Cell>
        <Table.Cell>
          Sets the <Code>justify-content</Code> property
        </Table.Cell>
        <Table.Cell>string</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>order</Table.Cell>
        <Table.Cell>
          Defines the flex-box <Code>order</Code> style
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>rounded</Table.Cell>
        <Table.Cell>
          Adds a subtle <Code>border-radius</Code>
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>vertical</Table.Cell>
        <Table.Cell>
          Sets <Code>flex-direction</Code> style to "column"
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>translucent</Table.Cell>
        <Table.Cell>Reduces the opacity of the background color</Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>withMotion</Table.Cell>
        <Table.Cell>
          Renders as a <Code>framer-motion</Code> component
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>xs, sm, md, lg, xl</Table.Cell>
        <Table.Cell>
          Defines the component width out of 12 for each respective breakpoint
        </Table.Cell>
        <Table.Cell>number</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default BlockAPI;
