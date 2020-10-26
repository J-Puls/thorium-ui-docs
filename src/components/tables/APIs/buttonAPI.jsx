/* React */
import React from "react";
/* Thorium-UI */
import { Table } from "thorium-ui";

export const ButtonAPI = () => (
  <Table>
    <Table.Header>
      <Table.Cell header>Prop</Table.Cell>
      <Table.Cell header>Description</Table.Cell>
      <Table.Cell header>Datatype</Table.Cell>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>variant</Table.Cell>
        <Table.Cell>Defines the color styling</Table.Cell>
        <Table.Cell>string</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>size</Table.Cell>
        <Table.Cell>Defines the size styling</Table.Cell>
        <Table.Cell>string</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>stretch</Table.Cell>
        <Table.Cell>Expands the button to fill its parent</Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>animated</Table.Cell>
        <Table.Cell>Adds a subtle animation when clicked</Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default ButtonAPI;
