import React, { Component } from "react";
import DetailsIcon from "@mui/icons-material/Details";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Col, Container, Row, Modal, Form, Alert } from "react-bootstrap";
// import TaskTagDialog from "../components/TaskTagDialog";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, taskModified, taskSelected } from "../../../store/actions";
import { doThis, updateItem, checkAStaff, report } from "../../../services";
function TaskPool() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const locationData = useSelector((state) => state.locations);
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

  const [select, setSelect] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [alterShow, setAlterShow] = React.useState(false);

  const [selectLocation, setSelectLocation] = React.useState(0);
  const detail = useSelector((state) => state.tasks.lists);
  React.useEffect(() => {
    async function fetchData() {
      // You can await here
      await getTasks(dispatch);
    }
    fetchData();
  }, []);
  return (
    <>
      <Alert variant="danger" show={alterShow}>
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
                      <TableCell>{task.purchased_date.split("T")[0]}</TableCell>
                      <TableCell>{`building: ${task.building} floor: ${task.floor} room: ${task.room}`}</TableCell>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.email}</TableCell>
                      <TableCell>
                        {task.previous_test_date &&
                          task.previous_test_date.split("T")[0]}
                      </TableCell>
                      <TableCell>
                        <Tooltip title="View the Details">
                          <DetailsIcon
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
                                setAlterShow(false);
                              } else {
                                setAlterShow(true);
                              }
                            }}
                          ></DetailsIcon>
                        </Tooltip>
                        <Tooltip title="To DO This Task">
                          <AddModeratorIcon
                            onClick={async () => {
                              await doThis(task.request);
                            }}
                          ></AddModeratorIcon>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            {/* <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[]}
                // colSpan={12}
                count={this.state.taskList.length}
                rowsPerPage={10}
                page={this.state.page}
                // SelectProps={{
                //     inputProps: {
                //         'aria-label': 'rows per page',
                //     },
                //     native: true,
                // }}
                onPageChange={this.handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter> */}
          </Table>
        </TableContainer>

        {/* <TaskDetailsDialog
        open={this.state.detailsDialogShow}
        info={this.state.info}
        closeDetailsDialog={this.closeDetailsDialog}
      ></TaskDetailsDialog>
      <TaskTagDialog
        open={this.state.tagDialogShow}
        info={this.state.info}
        closeTagDialog={this.closeTagDialog}
      ></TaskTagDialog> */}
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
                // const tasks = JSON.parse(localStorage.getItem("tasks"));
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
                }
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
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default TaskPool;

// class TaskPool extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             page: 0,
//             detailsDialogShow: false,
//             tagDialogShow: false,
//             headers: ['Ownership', 'Purchased Date', 'Address', 'Name', 'Email', 'Test'],
//             taskList: [
//                 { id: 1, ownership: 'UniSA', purchasedDate: '2022-05-10', address: 'ptest', name: 'Jon', email: 35, description: 'this is a test' },
//                 { id: 2, ownership: 'personal', purchasedDate: '2022-05-09', address: 'ptest', name: 'Alice', email:  42, description: 'hello world' },
//                 { id: 3, ownership: 'personal', purchasedDate: '2022-05-08', address: 'ptest', name: 'Jay', email:  45 },
//                 { id: 4, ownership: 'UniSA', purchasedDate: '2022-05-11', address: 'ptest', name: 'John', email:  16 },
//                 { id: 5, ownership: 'personal', purchasedDate: '2022-05-07', address: 'ptest', name: 'Bob', email:  436 },
//                 { id: 6, ownership: 'personal', purchasedDate: '2022-05-06', address: 'ptest', name: 'Tom', email:  150 },
//                 { id: 7, ownership: 'UniSA', purchasedDate: '2022-05-05', address: 'ptest', name: 'Tonny', email:  44 },
//                 { id: 8, ownership: 'personal', purchasedDate: '2022-05-04', address: 'ptest', name: 'Betty', email:  36 },
//                 { id: 9, ownership: 'UniSA', purchasedDate: '2022-05-02', address: 'ptest', name: 'ellen', email:  65 },
//                 { id: 10, ownership: 'UniSA', purchasedDate: '2022-05-01', address: 'ptest', name: 'ellen', email:  'frt5@gmail.com' },
//             ],
//             info: [ {id: 1, ownership: 'UniSA', purchasedDate: '2022-05-10', address: 'ptest', name: 'Jon', email: 35 }]
//         }
//         this.closeDetailsDialog = this.closeDetailsDialog.bind(this);
//         this.closeTagDialog = this.closeTagDialog.bind(this);
//         this.handleChangePage = this.handleChangePage.bind(this);
//     }

//     handleBackClick() {
//         window.location.href = "/dashboard";
//     }

//     closeDetailsDialog() {
//         this.setState({
//             detailsDialogShow: false
//         })
//     }

//     closeTagDialog() {
//         this.setState({
//             tagDialogShow: false
//         })
//     }

//     handleDetailsClick(id) {
//         this.setState({
//             detailsDialogShow: true,
//             info: this.state.taskList[id]
//         })
//     }

//     handleTagClick(id) {
//         this.setState({
//             info: this.state.taskList[id],
//             tagDialogShow: true
//         })
//     }

//     handleChangePage(event, newPage) {
//         this.setState({
//             page: newPage
//         });
//     };

//     render() {
//         return (
//             <div className="table-content">
//                 <Button
//                     size="small"
//                     onClick={this.handleBackClick}
//                     startIcon={<ArrowBackIosNewIcon />}
//                 >Back to Dashboard</Button>
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 {this.state.headers.map((title, index) => {
//                                     return <TableCell key={index}>{title}</TableCell>
//                                 })}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {this.state.taskList.map((task, index) => {
//                                 return (
//                                     <TableRow key={index}>
//                                         <TableCell>{task.ownership}</TableCell>
//                                         <TableCell>{task.purchasedDate}</TableCell>
//                                         <TableCell>{task.address}</TableCell>
//                                         <TableCell>{task.name}</TableCell>
//                                         <TableCell>{task.email}</TableCell>
//                                         <TableCell>
//                                             <Tooltip title="View the Details">
//                                                 <DetailsIcon onClick={this.handleDetailsClick.bind(this, index)}></DetailsIcon>
//                                             </Tooltip>
//                                             <Tooltip title="Click to Tag">
//                                                 <AddModeratorIcon onClick={this.handleTagClick.bind(this, index)}></AddModeratorIcon>
//                                             </Tooltip>
//                                         </TableCell>
//                                     </TableRow>
//                                 )
//                             })}
//                         </TableBody>
//                         <TableFooter>
//                             <TableRow>
//                                 <TablePagination
//                                     rowsPerPageOptions={[]}
//                                     // colSpan={12}
//                                     count={this.state.taskList.length}
//                                     rowsPerPage={10}
//                                     page={this.state.page}
//                                     // SelectProps={{
//                                     //     inputProps: {
//                                     //         'aria-label': 'rows per page',
//                                     //     },
//                                     //     native: true,
//                                     // }}
//                                     onPageChange={this.handleChangePage}
//                                     // onRowsPerPageChange={handleChangeRowsPerPage}
//                                     // ActionsComponent={TablePaginationActions}
//                                 />
//                             </TableRow>
//                         </TableFooter>
//                     </Table>
//                 </TableContainer>

//                 <TaskDetailsDialog
//                     open={this.state.detailsDialogShow}
//                     info={this.state.info}
//                     closeDetailsDialog={this.closeDetailsDialog}
//                 ></TaskDetailsDialog>
//                 <TaskTagDialog
//                     open={this.state.tagDialogShow}
//                     info={this.state.info}
//                     closeTagDialog={this.closeTagDialog}
//                 ></TaskTagDialog>
//             </div>
//         );
//     }
// }

// export default TaskPool;
