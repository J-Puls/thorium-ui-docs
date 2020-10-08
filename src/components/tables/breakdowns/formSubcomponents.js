import React from "react";
import { Code, Table } from "thorium-ui";

export const FormSubcomponents = () => (
  <Table bordered>
    <Table.Header>
      <Table.Cell header>Component Name</Table.Cell>
      <Table.Cell header>Description</Table.Cell>
    </Table.Header>
    <Table.Body striped>
      <Table.Row>
        <Table.Cell>Form</Table.Cell>
        <Table.Cell>
          The main wrapper which contains all other subcomponents. Renders as a
          standard HTML form element.
        </Table.Cell>
      </Table.Row>
      <Table.Row bordered>
        <Table.Cell>Group</Table.Cell>
        <Table.Cell>
          A <Code>Layer</Code> wrapper designed to contain a set of related{" "}
          <Code>Fields</Code>. A <Code>Group</Code> can contain any number of{" "}
          <Code>Fields</Code>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Field</Table.Cell>
        <Table.Cell>
          A <Code>Block</Code> wrapper designed to contain an individual{" "}
          <Code>Input</Code>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Input</Table.Cell>
        <Table.Cell>
          The interactive user input. (See <a href="/input">Input</a> for more
          information on individual inputs)
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default FormSubcomponents;
