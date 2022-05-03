import React from "react";
import { Form, Button } from "react-bootstrap";
import Title from "../../components/Title";
function Report() {
  return (
    <>
      <Title>Report</Title>
      <Form
        style={{
          width: "30%",
          border: "1px solid #8f8e8e",
          marginTop: "4%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
        }}
      >
        <Form.Group>
          <Form.Label>Condition</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Reason</Form.Label>
          <Form.Control />
        </Form.Group>

        <Button>Submit</Button>
      </Form>
    </>
  );
}

export default Report;
