import React from "react";

import Title from "../../components/Title";
import { Col, Container, Row, Modal, Form, Alert } from "react-bootstrap";
import MyTable from "../../components/MyTable";
import MyButton from "../../components/MyButton";

import { useSelector } from "react-redux";

function Dashboard() {
  const userData = useSelector((state) => state.user);
  const [select, setSelect] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);

  const [email, setEmail] = React.useState();
  const [ownership, setOwnership] = React.useState();
  const [name, setName] = React.useState();
  const [building, setBuilding] = React.useState();
  const [floor, setFloor] = React.useState();
  const [room, setRoom] = React.useState();
  const [purchased_date, setPurchasedDate] = React.useState();
  const [description, setDescription] = React.useState();

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
  const detail = useSelector((state) => state.tasks);

  if (userData.name) {
    return (
      <>
        <Title>Authorised Person</Title>
        <MyButton btn="purple-btn" style={{ width: "300px" }} href="/rest-date">
          Not Available Date
        </MyButton>
        <Container className="user-dashboard">
          <MyTable header={header} title="TO DO">
            {detail.map((item, index) => (
              <tr
                key={index}
                onClick={() => {
                  setSelect(index);
                }}
              >
                <td>{index}</td>
                <td>{item.ownership}</td>
                <td>{item.purchased_date}</td>
                <td>{`${item.building} ${item.floor} ${item.room}`}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>

                <td>{item.previous_test_date}</td>
                <td>
                  <MyButton
                    btn="red-btn"
                    onClick={() => {
                      setModalShow(true);

                      setEmail(detail[select].email);
                      setOwnership(detail[select].ownership);
                      setPurchasedDate(
                        detail[select].purchased_date.split("T")[0]
                      );
                      setName(detail[select].name);
                      setBuilding(detail[select].building);
                      setRoom(detail[select].room);
                      setFloor(detail[select].floor);
                      setDescription(detail[select].description);
                    }}
                  >
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
            <Modal.Header closeButton style={{ backgroundColor: "#333" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ color: "#fff" }}
              >
                ID: {detail[select].name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                <Row className="row-padding">
                  <Col md={4}>Email: </Col>
                  <Col md={8}>
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="row-padding">
                  <Col xs={6} md={4}>
                    Ownership:
                  </Col>
                  <Col xs={12} md={8}>
                    <Form.Select
                      defaultValue={ownership}
                      onChange={(e) => setOwnership(e.target.value)}
                    >
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
                    <Form.Control
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="row-padding">
                  <Form.Group as={Col}>
                    <Form.Label>Building</Form.Label>
                    <Form.Select defaultValue={building}>
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Floor</Form.Label>
                    <Form.Select defaultValue={floor}>
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Room</Form.Label>
                    <Form.Select defaultValue={room}>
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
                    <Form.Control
                      type="date"
                      value={purchased_date}
                      onChange={(e) => setPurchasedDate(e.target.value)}
                    ></Form.Control>
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#333" }}>
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
  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>
          Only Authorised Person Can Access This Page
        </Alert.Heading>
      </Alert>
    </>
  );
}

export default Dashboard;
