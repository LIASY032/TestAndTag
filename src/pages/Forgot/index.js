import React from "react";

import { Form, Button } from "react-bootstrap";
function Forgot() {
  return (
    <>
      <h1>Forgot</h1>
      <Form
        style={{
          width: "30%",
          border: "1px solid #8f8e8e",
          marginTop: "10%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Forgot;
