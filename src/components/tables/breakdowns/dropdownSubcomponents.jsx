/* React */
import React from "react";
/* Thorium-UI */
import { Code, Table } from "thorium-ui";

export const DropdownSubcomponents = () => (
  <Table>
    <Table.Header>
      <Table.Cell header>Component Name</Table.Cell>
      <Table.Cell header>Description</Table.Cell>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Container</Table.Cell>
        <Table.Cell>
          A wrapper containing all other <Code>Dropdown</Code> subcomponents
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Trigger</Table.Cell>
        <Table.Cell>
          The button which toggles the "active" state of the <Code>Menu</Code>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Menu</Table.Cell>
        <Table.Cell>
          The collapsible portion which contains the interactive components
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Item</Table.Cell>
        <Table.Cell>
          A styalized container that can hold any other component
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Link</Table.Cell>
        <Table.Cell>A styalized Link component</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Divider</Table.Cell>
        <Table.Cell>
          A styalized horizontal divider used to separate different sections in
          the <Code>Menu</Code>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default DropdownSubcomponents;
