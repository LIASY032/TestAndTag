import React from "react";
import "./oldItem.css";
import itemPic from "../../static/images/new-item.jpg";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { testOldItem } from "../../services";
import { Col, Row, Form } from "react-bootstrap";
function OldItem() {
  // location data from redux
  const locationData = useSelector((state) => state.locations);

  // this state help to select the building's rooms and floors
  const [selectLocation, setSelectLocation] = React.useState(0);

  // item id from the location data
  const [itemId, setItemId] = React.useState();

  // references for controlling the room and floor input
  const floorRef = React.useRef();
  const roomRef = React.useRef();

  // use for item list from location data
  const [list, setList] = React.useState([]);
  function handleSelectItems() {
    const items = [];
    for (const item of locationData[selectLocation].items) {
      if (item.floor == floorRef.current.value) {
        if (item.room == roomRef.current.value) {
          items.push(item);
        }
      }
    }
    setList(items);
  }
  return (
    <div className="old-item-container">
      <img className="old-item-pic" src={itemPic} alt="a" />
      <div className="old-item-form">
        <div className="old-item-title">Request an Existing Equipment Test</div>
        <div className="old-item-tips">
          <Button href="/new">Testing a New Equipment? Click Here</Button>
        </div>
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

            <Form.Select
              defaultValue="Choose..."
              onChange={(e) => {
                if (e.target.value != "Choose...") {
                  setSelectLocation(parseInt(e.target.value));
                  handleSelectItems();
                }
              }}
            >
              <option value="Choose...">Choose...</option>

              {locationData.length > 0 ? (
                locationData.map((element, index) => {
                  return (
                    <option value={index} key={index}>
                      {element.building}
                    </option>
                  );
                })
              ) : (
                <option>...</option>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Floor</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              ref={floorRef}
              onChange={handleSelectItems}
            >
              <option value="Choose...">Choose...</option>

              {locationData.length > 0 ? (
                locationData[selectLocation].floor.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })
              ) : (
                // if there is no floor data
                <option>...</option>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Room</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              ref={roomRef}
              onChange={handleSelectItems}
            >
              <option value="Choose...">Choose...</option>

              {locationData.length > 0 ? (
                locationData[selectLocation].room.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })
              ) : (
                // if there is no room data
                <option>...</option>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Item</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              onChange={(e) => {
                if (e.target.value !== "Choose...") {
                  setItemId(e.target.value);
                }
              }}
            >
              <option value="Choose...">Choose...</option>

              {/* if there is the exact location of the item */}
              {list.length > 0 ? (
                list.map((element, index) => {
                  return (
                    <option value={element.item_id} key={index}>
                      {element.name +
                        " date: " +
                        element.expire_date.split("T")[0]}
                    </option>
                  );
                })
              ) : (
                <option>...</option>
              )}
            </Form.Select>
          </Form.Group>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button
                className="select-form-btn"
                onClick={async () => {
                  if (itemId) {
                    await testOldItem(itemId);
                    window.location.href = "/submit_success";
                  }
                }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default OldItem;
