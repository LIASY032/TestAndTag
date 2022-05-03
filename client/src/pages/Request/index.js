import React from "react";
import { Form, Button, Col, Row, Modal } from "react-bootstrap";
import Title from "../../components/Title";
import { useSelector } from "react-redux";
import { addNewItem } from "../../services";
function Request() {
  const [show, setShow] = React.useState(true);
  const locationData = useSelector((state) => state.locations);
  const handleClose = () => setShow(false);

  const [newItem, setNewItem] = React.useState({});
  const [selectLocation, setSelectLocation] = React.useState(0);
  const emailRef = React.useRef();
  const ownershipRef = React.useRef();
  const nameRef = React.useRef();

  const buildingRef = React.useRef();
  const floorRef = React.useRef();
  const roomRef = React.useRef();
  const purchased_dateRef = React.useRef();
  const descriptionRef = React.useRef();
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
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setNewItem({ ...newItem, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Ownership</Form.Label>
            <Form.Select ref={ownershipRef} defaultValue="Choose...">
              <option value="Choose...">Choose...</option>
              <option value="Personal">Personal</option>
              <option value="UniSA">UniSA</option>
            </Form.Select>
          </Form.Group>{" "}
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" ref={nameRef} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Building</Form.Label>
                <Form.Select
                  ref={buildingRef}
                  defaultValue="Choose..."
                  onChange={(e) => {
                    if (e.target.value != "Choose...") {
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
                <Form.Label>Floor</Form.Label>
                <Form.Select ref={floorRef} defaultValue="Choose...">
                  <option value="Choose...">Choose...</option>

                  {locationData.length > 0 ? (
                    locationData[selectLocation].floor.map((element, index) => {
                      return (
                        <option value={index} key={index}>
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
                <Form.Label>Room</Form.Label>
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
          </Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Purchase Date</Form.Label>

            <Form.Control type="date" ref={purchased_dateRef}></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control ref={descriptionRef} as="textarea" rows={3} />
          </Form.Group>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col>
            <Button
              onClick={async () => {
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
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Request;
