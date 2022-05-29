import React, { Component } from "react";
import "./TaskDetails.css";
import { Button } from "@mui/material";
import { Col, Container, Row, Modal, Form, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, taskModified, taskSelected } from "../../../store/actions";
import { doThis, updateItem, checkAStaff } from "../../../services";

function TaskDetails({ task, select, selectLocation, setSelectLocation }) {
  const locationData = useSelector((state) => state.locations);

  const dispatch = useDispatch();
  return (
    <div className="task-details-container">
      <Button className="details-back-list" href="/work_list">
        Back to List
      </Button>
      <div className="details-title">TASK INFORMATION</div>

      <Container>
        <Row className="row-padding">
          <Col md={4}>Email: </Col>
          <Col md={8}>
            <Form.Control
              type="email"
              defaultValue={task.email}
              onChange={(e) => {
                task.email = e.target.value;
                taskModified(select, task, dispatch);
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
              defaultValue={task.ownership}
              onChange={(e) => {
                task.ownership = e.target.value;
                taskModified(select, task, dispatch);
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
                task.building = e.target.value;
                taskModified(select, task, dispatch);
              }}
              defaultValue={task.building}
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
              defaultValue={task.floor}
              onChange={(e) => {
                task.floor = e.target.value;
                taskModified(select, task, dispatch);
              }}
            >
              {locationData.length > 0 ? (
                locationData[selectLocation].floor.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })
              ) : (
                <option>...</option>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Room</Form.Label>
            <Form.Select
              defaultValue={task.room}
              onChange={(e) => {
                task.room = e.target.value;
                taskModified(select, task, dispatch);
              }}
            >
              {locationData.length > 0 ? (
                locationData[selectLocation].room.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })
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
              value={task.purchased_date.split("T")[0]}
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
                task.previous_test_date && task.previous_test_date.split("T")[0]
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
              defaultValue={task.description}
              onChange={(e) => {
                task.description = e.target.value;
                taskModified(select, task, dispatch);
              }}
            />
          </Form.Group>
        </Row>
      </Container>

      <div className="details-title">TAG INFORMATION</div>
      <div className="item-title">Expiration Date</div>
      <div className="item-title">Tag Result</div>
      <div className="item-title">Tag Description</div>
      <textarea rows="4" className="tag-textarea"></textarea>
      <div className="btn-container">
        <Button
          variant="contained"
          color="success"
          className="details-btn btn-tag"
        >
          TAG
        </Button>
        <Button
          variant="contained"
          className="details-btn btn-back"
          onClick={this.handleBackClick}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}

// class TaskDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       informExm: {
//         id: 1,
//         order_no: "22050607221201",
//         ownership: 1,
//         description: "",
//         purchased_date: "2022/01/02",
//         address: "A Building, Floor 1, Room 1",
//         name: "ZhangSan",
//         email: "ZhangSan@example",
//         create_at: "2022/05/06",
//       },
//       informationTitle: [
//         "Order No",
//         "Apply Time",
//         "Email",
//         "Name",
//         "Address",
//         "Ownership",
//         "Purchase Date",
//         "Item Description",
//         "Testing Tag",
//         "Tested Count",
//       ],
//     };
//   }

//   handleBackClick() {
//     window.location.href = "/work_list";
//   }

//   render() {
//     return (
//       <div className="task-details-container">
//         <Button className="details-back-list" onClick={this.handleBackClick}>
//           Back to List
//         </Button>

//         <div className="details-title">TASK INFORMATION</div>

//         {this.state.informationTitle.map((item, index) => {
//           return <div className="item-title">{item}</div>;
//         })}

//         <div className="details-title">TAG INFORMATION</div>
//         <div className="item-title">Expiration Date</div>
//         <div className="item-title">Tag Result</div>
//         <div className="item-title">Tag Description</div>
//         <textarea rows="4" className="tag-textarea"></textarea>
//         <div className="btn-container">
//           <Button
//             variant="contained"
//             color="success"
//             className="details-btn btn-tag"
//           >
//             TAG
//           </Button>
//           <Button
//             variant="contained"
//             className="details-btn btn-back"
//             onClick={this.handleBackClick}
//           >
//             BACK
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

export default TaskDetails;
