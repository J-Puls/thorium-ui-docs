import React from "react";
import { Code, Table } from "thorium-ui";

export const BlockAPI = () => (
  <Table>
    <Table.Header>
      <Table.Cell header>Name</Table.Cell>
      <Table.Cell header>Description</Table.Cell>
      <Table.Cell header>Datatype</Table.Cell>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>all</Table.Cell>
        <Table.Cell>
          Defines the component width out of 12 for all breakpoints
        </Table.Cell>
        <Table.Cell>integer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>xs, sm, md, lg, xl</Table.Cell>
        <Table.Cell>
          Defines the component width out of 12 for each respective breakpoint
        </Table.Cell>
        <Table.Cell>integer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>translucent</Table.Cell>
        <Table.Cell>Reduces the opacity of the background color</Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>vertical</Table.Cell>
        <Table.Cell>
          Sets <Code>flex-direction</Code> style to "column"
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default BlockAPI;
