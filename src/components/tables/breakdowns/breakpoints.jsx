/* React */
import React from "react";
/* Thorium-UI */
import { Table } from "thorium-ui";

export const BreakpointsTable = () => (
  <Table style={{ textAlign: "center" }}>
    <Table.Header>
      <Table.Cell header>Name</Table.Cell>
      <Table.Cell header>Breakpoint Width</Table.Cell>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>xs</Table.Cell>
        <Table.Cell>less than 576px</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>sm</Table.Cell>
        <Table.Cell>576px - 1023px</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>md</Table.Cell>
        <Table.Cell>1024px - 1365px</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>lg</Table.Cell>
        <Table.Cell>1366px - 1919px</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>xl</Table.Cell>
        <Table.Cell>1920px or greater</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default BreakpointsTable;
