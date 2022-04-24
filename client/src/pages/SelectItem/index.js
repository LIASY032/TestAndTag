import React from "react";

import Title from "../../components/Title";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
function SelectItem() {
  return (
    <>
      <Title>Select Item</Title>
      <Container className="user-dashboard">
        <Row>
          <Col>
            <Form
              style={{
                border: "1px solid #8f8e8e",
                marginTop: "4%",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "10px",
              }}
            >
              <Form.Group>
                <Form.Label>Building</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Floor</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Room</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Item</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              New Item
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SelectItem;
