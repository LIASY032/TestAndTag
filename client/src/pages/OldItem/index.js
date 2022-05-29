import React from "react";
import "./oldItem.css";
import itemPic from "../../static/images/new-item.jpg";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { testOldItem } from "../../services";
import { Col, Row, Form } from "react-bootstrap";
function OldItem() {
  const locationData = useSelector((state) => state.locations);
  const [selectLocation, setSelectLocation] = React.useState(0);

  const [itemId, setItemId] = React.useState();
  const floorRef = React.useRef();
  const roomRef = React.useRef();

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
      <img className="old-item-pic" src={itemPic} />
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

              {list.length > 0 ? (
                list.map((element, index) => {
                  return (
                    <option value={element.item_id} key={index}>
                      {element.name}
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
                  }
                }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        {/* <div className="item-order">
          <div className="order-input">
            <TextField
              fullWidth
              size="small"
              label="Your Service Order NO."
              variant="standard"
            />
          </div>
          <Button variant="contained" color="success">
            QUERY
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default OldItem;

// const picURL = itemPic;
// class OldItem extends Component {
//     handleTipClick() {
//         window.location.href = "/new";
//     }
//     render() {
//         return (
//             <div className="old-item-container">
//                 <img className="old-item-pic" src={picURL} />
//                 <div className="old-item-form">
//                     <div className="old-item-title">Request an Existing Equipment Test</div>
//                     <div className="old-item-tips">
//                         <Button onClick={this.handleTipClick}>Testing a New Equipment? Click Here</Button>
//                     </div>
//                     <div className="item-order">
//                         {/*<input className="order-input" placeholder={"Your Service Order No."}/>*/}
//                         <div className="order-input">
//                             <TextField fullWidth size="small" label="Your Service Order NO." variant="standard"/>
//                         </div>
//                         <Button variant="contained" color="success">QUERY</Button>
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

// export default OldItem;
