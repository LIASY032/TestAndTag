import React from "react";
import Title from "../../components/Title";

import { Form, Button } from "react-bootstrap";
function Login() {
  return (
    <>
      <Title>Login</Title>
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Login;
