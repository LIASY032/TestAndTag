import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import Title from "../../components/Title";

function Request() {
  return (
    <>
      <Title>Which equipments need to be tested</Title>
      <Form
        style={{
          width: "80%",
          border: "1px solid #8f8e8e",
          marginTop: "4%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
        }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Ownership</Form.Label>
            <Form.Control placeholder="Ownership" />
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Location</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Purchase Date</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Does this item have a current electrical testing tag"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Request;
