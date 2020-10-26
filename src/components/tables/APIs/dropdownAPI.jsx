/* React */
import React from "react";
/* Thorium-UI */
import { Code, Table } from "thorium-ui";

export const DropdownAPI = () => (
  <Table>
    <Table.Header>
      <Table.Cell header>Prop</Table.Cell>
      <Table.Cell header>Description</Table.Cell>
      <Table.Cell header>Datatype</Table.Cell>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>defaultOpen</Table.Cell>
        <Table.Cell>
          If true, the dropdown will render opened by default
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>displayType</Table.Cell>
        <Table.Cell>
          Determines how the <Code>DropdownMenu</Code> animates.
        </Table.Cell>
        <Table.Cell>
          <Code>"block"</Code> or <Code>"float"</Code>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>icons</Table.Cell>
        <Table.Cell>
          If true, open/close icons will be rendered on the{" "}
          <Code>DropdownTrigger</Code>
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>remoteTrigger</Table.Cell>
        <Table.Cell>
          If true, the <Code>DropdownTrigger</Code> will not be rendered
        </Table.Cell>
        <Table.Cell>boolean</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>size</Table.Cell>
        <Table.Cell>
          Determines the rendered size of the <Code>DropdownTrigger</Code>
        </Table.Cell>
        <Table.Cell>
          <Code>"sm"</Code>, <Code>"normal"</Code>, or <Code>"lg</Code>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>text</Table.Cell>
        <Table.Cell>
          The text that will be displayed on the <Code>DropdownTrigger</Code>
        </Table.Cell>
        <Table.Cell>string</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>triggerType</Table.Cell>
        <Table.Cell>
          Determines how the <Code>DropdownTrigger</Code> is activated
        </Table.Cell>
        <Table.Cell>
          <Code>"click"</Code> or <Code>"hover"</Code>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>variant</Table.Cell>
        <Table.Cell>
          Determines the color of the <Code>DropdownTrigger</Code>
        </Table.Cell>
        <Table.Cell>
          <Code>"primary"</Code>, <Code>"secondary"</Code>,{" "}
          <Code>"success"</Code>, <Code>"warning"</Code>, <Code>"danger"</Code>,{" "}
          <Code>"light"</Code>, <Code>"dark"</Code>, or <Code>"link"</Code>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default DropdownAPI;
