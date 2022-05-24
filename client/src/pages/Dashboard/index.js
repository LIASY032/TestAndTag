import React from "react";

import Title from "../../components/Title";
import { Col, Container, Row, Modal, Form, Alert } from "react-bootstrap";
import MyTable from "../../components/MyTable";
import MyButton from "../../components/MyButton";

import { useSelector, useDispatch } from "react-redux";
import { taskModified, taskSelected } from "../../store/actions";
import { doThis, updateItem } from "../../services";

function Dashboard() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const locationData = useSelector((state) => state.locations);
  const [select, setSelect] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);

  const [selectLocation, setSelectLocation] = React.useState(0);
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
  const detail = useSelector((state) => state.tasks.lists);

  if (userData.name) {
    return (
      <>
        <Title>Authorised Person</Title>
        <Container className="user-dashboard">
          <MyTable header={header} title="TO DO">
            {detail &&
              detail.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.ownership}</td>
                  <td>{item.purchased_date.split("T")[0]}</td>
                  <td>{`building: ${item.building} floor: ${item.floor} room: ${item.room}`}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <td>
                    {item.previous_test_date &&
                      item.previous_test_date.split("T")[0]}
                  </td>
                  <td>
                    <MyButton
                      btn="red-btn"
                      onClick={() => {
                        setModalShow(true);
                        setSelect(index);
                        taskSelected(index, dispatch);

                        let count = 0;
                        for (const location of locationData) {
                          if (location.building === item.building) {
                            setSelectLocation(count);
                          }
                          count += 1;
                        }
                      }}
                    >
                      view
                    </MyButton>

                    <MyButton
                      btn="purple-btn"
                      onClick={async () => {
                        await doThis(item.request);
                      }}
                    >
                      {" "}
                      Do this
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
                Name: {detail[select].name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                <Row className="row-padding">
                  <Col md={4}>Email: </Col>
                  <Col md={8}>
                    <Form.Control
                      type="email"
                      defaultValue={detail[select].email}
                      onChange={(e) => {
                        detail[select].email = e.target.value;
                        taskModified(select, detail[select], dispatch);
                      }}
                    />
                  </Col>
                </Row>
                <Row className="row-padding">
                  <Col xs={6} md={4}>
                    Ownership:
                  </Col>
                  <Col xs={12} md={8}>
                    <Form.Select
                      defaultValue={detail[select].ownership}
                      onChange={(e) => {
                        detail[select].ownership = e.target.value;
                        taskModified(select, detail[select], dispatch);
                      }}
                    >
                      <option value="Personal">Personal</option>
                      <option value="UniSA">UniSA</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="row-padding">
                  <Form.Group as={Col}>
                    <Form.Label>Building</Form.Label>

                    <Form.Select
                      onChange={(e) => {
                        let count = 0;
                        for (const location of locationData) {
                          if (location.building === e.target.value) {
                            setSelectLocation(count);
                          }
                          count += 1;
                        }
                        detail[select].building = e.target.value;
                        taskModified(select, detail[select], dispatch);
                      }}
                      defaultValue={detail[select].building}
                    >
                      {locationData.length > 0 ? (
                        locationData.map((element, index) => {
                          return (
                            <option value={element.building} key={index}>
                              {element.building}
                            </option>
                          );
                        })
                      ) : (
                        <option>...</option>
                      )}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Floor</Form.Label>
                    <Form.Select
                      defaultValue={detail[select].floor}
                      onChange={(e) => {
                        detail[select].floor = e.target.value;
                        taskModified(select, detail[select], dispatch);
                      }}
                    >
                      {locationData.length > 0 ? (
                        locationData[selectLocation].floor.map(
                          (element, index) => {
                            return (
                              <option value={element} key={index}>
                                {element}
                              </option>
                            );
                          }
                        )
                      ) : (
                        <option>...</option>
                      )}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Room</Form.Label>
                    <Form.Select
                      defaultValue={detail[select].room}
                      onChange={(e) => {
                        detail[select].room = e.target.value;
                        taskModified(select, detail[select], dispatch);
                      }}
                    >
                      {locationData.length > 0 ? (
                        locationData[selectLocation].room.map(
                          (element, index) => {
                            return (
                              <option value={element} key={index}>
                                {element}
                              </option>
                            );
                          }
                        )
                      ) : (
                        <option>...</option>
                      )}
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
                      value={detail[select].purchased_date.split("T")[0]}
                      disabled
                    ></Form.Control>
                  </Col>
                </Row>
                <Row className="row-padding">
                  <Col md={4}>Previous Tested Date:</Col>
                  <Col md={8}>
                    <Form.Control
                      type="date"
                      disabled
                      defaultValue={
                        detail[select].previous_test_date &&
                        detail[select].previous_test_date.split("T")[0]
                      }
                    ></Form.Control>
                  </Col>
                </Row>

                <Row className="row-padding">
                  <Form.Group className="mb-3">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      defaultValue={detail[select].description}
                      onChange={(e) => {
                        detail[select].description = e.target.value;
                        taskModified(select, detail[select], dispatch);
                      }}
                    />
                  </Form.Group>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#333" }}>
              <MyButton
                btn="yellow-btn"
                href="/expire-date"
                onClick={async (e) => {
                  await updateItem(detail[select]);
                }}
              >
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
