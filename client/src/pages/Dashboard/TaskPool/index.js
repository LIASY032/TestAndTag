import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Col, Container, Row, Modal, Form, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, taskModified, taskSelected } from "../../../store/actions";
import {
  doThis,
  checkAStaff,
  report,
  deleteAStaff,
  updateItem,
} from "../../../services";
import MyButton from "../../../components/MyButton";
function TaskPool() {
  const dispatch = useDispatch();

  // get user and location data from redux
  const userData = useSelector((state) => state.user);
  const locationData = useSelector((state) => state.locations);

  // these states for the result tag
  const [result, setResult] = React.useState();
  const [pass, setPass] = React.useState(false);
  const [fail, setFail] = React.useState(false);
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

  // select for the selection of task list
  const [select, setSelect] = React.useState(0);

  // model show
  const [modalShow, setModalShow] = React.useState(false);
  const [alterShow, setAlterShow] = React.useState(false);

  // selection for the location
  const [selectLocation, setSelectLocation] = React.useState(0);

  // get task list
  const detail = useSelector((state) => state.tasks.lists);
  React.useEffect(() => {
    async function fetchData() {
      // You can await here
      await getTasks(dispatch);
    }
    fetchData();
  }, []);
  if (userData.name) {
    return (
      <>
        {/* alter for having select the task */}
        <Alert id="alter" variant="danger" show={alterShow}>
          <Alert.Heading>You need to select to do this task</Alert.Heading>
        </Alert>
        <div className="table-content">
          <Button
            size="small"
            startIcon={<ArrowBackIosNewIcon />}
            href="/dashboard"
          >
            Back to Dashboard
          </Button>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {header.map((title, index) => {
                    return <TableCell key={index}>{title}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {detail &&
                  detail.map((task, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index}</TableCell>
                        <TableCell>{task.ownership}</TableCell>
                        <TableCell>
                          {task.purchased_date.split("T")[0]}
                        </TableCell>
                        <TableCell>{`building: ${task.building} floor: ${task.floor} room: ${task.room}`}</TableCell>
                        <TableCell>{task.name}</TableCell>
                        <TableCell>{task.email}</TableCell>
                        <TableCell>
                          {task.previous_test_date &&
                            task.previous_test_date.split("T")[0]}
                        </TableCell>
                        <TableCell>
                          <MyButton
                            btn="red-btn"
                            onClick={async () => {
                              const check = await checkAStaff(task.request);
                              if (check) {
                                setModalShow(true);
                                setSelect(index);
                                taskSelected(index, dispatch);

                                let count = 0;
                                for (const location of locationData) {
                                  if (location.building === task.building) {
                                    setSelectLocation(count);
                                  }
                                  count += 1;
                                }
                              } else {
                                setAlterShow(true);
                                window.location.href = "/task_pool/#alter";
                              }
                            }}
                          >
                            view
                          </MyButton>
                          <MyButton
                            btn="purple-btn"
                            onClick={async () => {
                              await doThis(task.request);
                              setAlterShow(false);
                            }}
                          >
                            {" "}
                            Do this
                          </MyButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {detail && detail[select] && (
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
                      onChange={async (e) => {
                        detail[select].description = e.target.value;
                        taskModified(select, detail[select], dispatch);
                      }}
                    />
                  </Form.Group>
                </Row>
                <fieldset onChange={(e) => setResult(e.target.value)}>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                      Result
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        value="pass"
                        label="PASS"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        value="fail"
                        label="FAIL"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>

                {result === "pass" && (
                  <Form.Group as={Row}>
                    <Form.Label>Expire Date</Form.Label>
                    <Form.Control
                      type="date"
                      onChange={(e) => {
                        setFail(false);
                        setPass(e.target.value);
                      }}
                    />
                  </Form.Group>
                )}

                {result === "fail" && (
                  <Form.Group as={Row}>
                    <Form.Label> Reason</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setPass(false);
                        setFail(e.target.value);
                      }}
                    />
                  </Form.Group>
                )}
              </Container>
            </Modal.Body>
            <Modal.Footer
              style={{
                backgroundColor: "#333",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                variant="contained"
                color="success"
                className="details-btn btn-tag"
                onClick={async () => {
                  const item = detail[select];
                  if (fail) {
                    await report({
                      item_id: item._id,
                      request_id: item.request,
                      condition: result,
                      reason: fail,
                    });
                    setModalShow(false);
                  }

                  if (pass) {
                    await report({
                      item_id: item._id,
                      request_id: item.request,
                      condition: result,
                      next_test_date: pass,
                    });
                    setModalShow(false);

                    window.location.href = "/task_pool";
                  }

                  await updateItem(item);
                }}
              >
                TAG
              </Button>
              <Button
                variant="contained"
                className="details-btn btn-back"
                onClick={() => setModalShow(false)}
              >
                BACK
              </Button>

              <MyButton
                onClick={async () => {
                  // delete the user from the staff list of the request
                  await deleteAStaff(detail[select].request);
                  // back to dashboard
                  setModalShow(false);
                }}
              >
                Delete This Task
              </MyButton>
            </Modal.Footer>
          </Modal>
        )}
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

export default TaskPool;
