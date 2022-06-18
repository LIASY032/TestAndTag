import React from "react";
import "./createItem.css";
import itemPic from "../../static/images/new-item.jpg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button, FormGroup, FormLabel } from "@mui/material";
import { Form, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { addNewItem } from "../../services";
function CreateItem() {
  const locationData = useSelector((state) => state.locations);

  // get the location data from the redux
  const [selectLocation, setSelectLocation] = React.useState(0);

  // input references
  const emailRef = React.useRef();
  const ownershipRef = React.useRef();
  const nameRef = React.useRef();
  const buildingRef = React.useRef();
  const floorRef = React.useRef();
  const roomRef = React.useRef();
  const purchased_dateRef = React.useRef();
  const descriptionRef = React.useRef();
  return (
    <div className="new-item-container">
      <img className="new-item-pic" src={itemPic} alt="a" />
      <div className="new-item-form">
        <div className="new-item-title">Request a Test from Test & Tag</div>
        <div className="new-item-tips">
          <Button href="/old">Testing an Existing Equipment? Click Here</Button>
        </div>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <Form.Control placeholder="Name" ref={nameRef} />
          <FormLabel sx={{ marginTop: "10px" }}>Email Address</FormLabel>
          <Form.Control placeholder="Email" ref={emailRef} type="email" />

          <Row style={{ marginTop: "10px" }}>
            <Form.Group as={Col} controlId="formGridState">
              <FormLabel>Building</FormLabel>
              <Form.Select
                ref={buildingRef}
                defaultValue="Choose..."
                onChange={(e) => {
                  if (e.target.value !== "Choose...") {
                    setSelectLocation(parseInt(e.target.value));
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
            <Form.Group as={Col} controlId="formGridState">
              <FormLabel>Floor</FormLabel>
              <Form.Select ref={floorRef} defaultValue="Choose...">
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
            <Form.Group as={Col} controlId="formGridState">
              <FormLabel>Room</FormLabel>
              <Form.Select defaultValue="Choose..." ref={roomRef}>
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
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Form.Group as={Col}>
              <FormLabel>Ownership</FormLabel>
              <Form.Select ref={ownershipRef} defaultValue="Choose...">
                <option value="Choose...">Choose...</option>
                <option value="Personal">Personal</option>
                <option value="UniSA">UniSA</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <FormLabel>Purchase Date</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Form.Control
                  type="date"
                  ref={purchased_dateRef}
                ></Form.Control>
              </LocalizationProvider>
            </Form.Group>
          </Row>

          <FormLabel sx={{ marginTop: "10px" }}>Description</FormLabel>
          <Form.Control ref={descriptionRef} as="textarea" rows={3} />
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
            }}
            color="success"
            onClick={async () => {
              // check all inputs are valid and filled
              if (emailRef.current.value) {
                if (ownershipRef.current.value != "Choose...") {
                  if (nameRef.current.value) {
                    if (buildingRef.current.value != "Choose...") {
                      if (floorRef.current.value != "Choose...") {
                        if (roomRef.current.value != "Choose...") {
                          if (purchased_dateRef.current.value) {
                            await addNewItem({
                              email: emailRef.current.value,
                              ownership: ownershipRef.current.value,
                              name: nameRef.current.value,
                              building: locationData[selectLocation].building,
                              floor: floorRef.current.value,
                              room: roomRef.current.value,
                              purchased_date: purchased_dateRef.current.value,
                              description: descriptionRef.current.value,
                            });

                            // go to submit success page
                            window.location.href = "/submit_success";
                          } else {
                            purchased_dateRef.current.focus();
                          }
                        } else {
                          roomRef.current.focus();
                        }
                      } else {
                        floorRef.current.focus();
                      }
                    } else {
                      buildingRef.current.focus();
                    }
                  } else {
                    nameRef.current.focus();
                  }
                } else {
                  ownershipRef.current.focus();
                }
              } else {
                emailRef.current.focus();
              }
            }}
          >
            SUBMIT
          </Button>
        </FormGroup>
      </div>
    </div>
  );
}

export default CreateItem;
