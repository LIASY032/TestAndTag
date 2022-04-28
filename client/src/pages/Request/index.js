import React from "react";
import {
  Form,
  Button,
  Col,
  Row,
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { CalendarFill, CalendarXFill } from "react-bootstrap-icons";
import Title from "../../components/Title";

function Request() {
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Title>Which equipments need to be tested</Title>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to request a test?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
            <Form.Select>
              <option>Personal</option>
              <option>UniSA</option>
            </Form.Select>
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Building</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Floor</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Room</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Purchase Date</Form.Label>

            <Form.Control type="date"></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Request;
