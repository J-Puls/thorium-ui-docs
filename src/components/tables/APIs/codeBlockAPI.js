import React from "react";
import { Table } from "thorium-ui";
export const CodeBlockAPI = () => (
  <Table>
    <Table.Header>
      <Table.Cell header>Name</Table.Cell>
      <Table.Cell header>Description</Table.Cell>
      <Table.Cell header>Datatype</Table.Cell>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>language</Table.Cell>
        <Table.Cell>
          Defines the programming language to be parsed for syntax highlighting
        </Table.Cell>
        <Table.Cell>string</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>disbleCopy</Table.Cell>
        <Table.Cell>Disables the built-in copy functionality</Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>disableSelect</Table.Cell>
        <Table.Cell>
          Disables the users ability to select/copy the text contents
        </Table.Cell>
        <Table.Cell>string</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default CodeBlockAPI;
