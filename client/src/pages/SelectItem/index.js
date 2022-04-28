import React from "react";

import "./style.scss";
import Title from "../../components/Title";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import MyButton from "../../components/MyButton";
function SelectItem() {
  return (
    <>
      <Title>Select Item</Title>
      <Container className="user-dashboard">
        <Row>
          <Col>
            <h2>An Existing Item</h2>
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
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <Button className="select-form-btn" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <h2>An New Item</h2>
            <MyButton href="/request" style={{ marginTop: "35%" }}>
              New Item
            </MyButton>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SelectItem;
