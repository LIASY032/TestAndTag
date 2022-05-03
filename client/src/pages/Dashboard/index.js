import React from "react";

import Title from "../../../components/Title";
import {
  Button,
  Col,
  Container,
  Row,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import Details from "../../../components/Details";
import MyTable from "../../../components/MyTable";
import MyButton from "../../../components/MyButton";
function Dashboard() {
  const [select, setSelect] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const header = [
    "Id",
    "Ownership",
    "Purchased Date",
    "Location",
    "Name",
    "Email",
    "Previous Tested Date",
    "Control",
  ];
  const detail = [
    {
      id: "1",
      ownership: "Personal",
      description: "",
      expire_date: "13/4/2022",
      previous_test_date: "03/02/2021",
      purchased_date: "01/01/2021",
      location: "P Building, Floor 1, Room 2",
      name: "Fan",
      email: "fan@example",
    },
    {
      id: "2",
      ownership: "UniSA",
      description: "",
      expire_date: "13/4/2022",
      previous_test_date: "1/1/2021",
      purchased_date: "1/1/2020",
      name: "Liang",
      location: "F Building, Floor 2, Room 2",
      email: "liang@example",
    },
  ];

  return (
    <>
      <Title>Authorised Person</Title>
      <Container className="user-dashboard">
        <MyTable header={header} title="TO DO">
          {detail.map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                setSelect(index);
              }}
            >
              <td>{item.id}</td>
              <td>{item.ownership}</td>
              <td>{item.purchased_date}</td>
              <td>{item.location}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>

              <td>{item.previous_test_date}</td>
              <td>
                <MyButton btn="red-btn" onClick={() => setModalShow(true)}>
                  view
                </MyButton>
              </td>
            </tr>
          ))}
        </MyTable>
        <Modal
          onHide={() => setModalShow(false)}
          show={modalShow}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton className="my-background-color">
            <Modal.Title id="contained-modal-title-vcenter">
              ID: {detail[select].id}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row className="row-padding">
                <Col md={4}>Email: </Col>
                <Col md={8}>
                  <Form.Control value={detail[select].email}></Form.Control>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={6} md={4}>
                  Ownership:
                </Col>
                <Col xs={12} md={8}>
                  <Form.Select defaultValue={detail[select].ownership}>
                    <option value="Personal">Personal</option>
                    <option value="UniSA">UniSA</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col xs={6} md={4}>
                  Name:
                </Col>
                <Col xs={12} md={8}>
                  <Form.Control value={detail[select].name} />
                </Col>
              </Row>

              <Row className="row-padding">
                <Form.Group as={Col}>
                  <Form.Label>Building</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Floor</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Room</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="row-padding">
                <Col xs={6} md={4}>
                  Purchased Date:
                </Col>
                <Col md={8}>
                  <Form.Control type="date"></Form.Control>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col md={4}>Previous Tested Date:</Col>
                <Col md={8}>
                  <Form.Control type="date"></Form.Control>
                </Col>
              </Row>

              <Row className="row-padding">
                <Form.Group className="mb-3">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={detail[select].description}
                  />
                </Form.Group>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className="my-background-color">
            <MyButton btn="yellow-btn" href="/expire-date">
              Pass
            </MyButton>
            <MyButton btn="red-btn" href="/report">
              Fail
            </MyButton>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Dashboard;
