import React from "react";
import Title from "../../components/Title";

import { Form, Button } from "react-bootstrap";
import { login } from "../../store/actions";
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

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
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Button
          onClick={async () => {
            const success = await login(
              {
                email: emailRef.current.value,
                password: passwordRef.current.value,
              },
              dispatch
            );

            if (success) {
              window.location.href = "/tester";
            }
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Login;
