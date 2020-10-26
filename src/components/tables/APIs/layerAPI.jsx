/* React */
import React from "react";
/* Thorium-UI */
import { Code, Table } from "thorium-ui";

export const LayerAPI = () => (
  <Table>
    <Table.Header>
      <Table.Cell header>Prop</Table.Cell>
      <Table.Cell header>Description</Table.Cell>
      <Table.Cell header>Datatype</Table.Cell>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>justify</Table.Cell>
        <Table.Cell>
          Sets the <Code>justify-content</Code> style
        </Table.Cell>
        <Table.Cell>string</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>rounded</Table.Cell>
        <Table.Cell>Adds a subtle border-radius</Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>translucent</Table.Cell>
        <Table.Cell>Reduces the opacity of the background color</Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>sticky</Table.Cell>
        <Table.Cell>
          Sets <Code>position</Code> style to "sticky"
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default LayerAPI;
