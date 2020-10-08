import React from "react";
import { Form, Layer, TextInput, Submit, Checkbox } from "thorium-ui";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submitted");
};

export const FormExample = () => (
  <Layer justify="center" style={{ marginTop: "1rem" }}>
    <Form
      bordered
      onSubmit={(e) => handleSubmit(e)}
      xs={12}
      sm={12}
      md={10}
      lg={8}
      xl={6}
    >
      <Form.Group>
        <Form.Field xs={12} sm={12} md={6} lg={6} xl={6} vertical>
          <TextInput label="Email" type="email" placeholder="email" />
        </Form.Field>
        <Form.Field xs={12} sm={12} md={6} lg={6} xl={6} vertical>
          <TextInput label="Password" type="password" placeholder="password" />
        </Form.Field>
      </Form.Group>
      <Form.Group>
        <Form.Field>
          <Checkbox
            justify="center"
            rounded
            label={
              <small>I have read and understand the Terms and Conditions</small>
            }
          />
        </Form.Field>
      </Form.Group>
      <Form.Field all={12}>
        <Submit stretch>Submit</Submit>
      </Form.Field>
    </Form>
  </Layer>
);

export default FormExample;
