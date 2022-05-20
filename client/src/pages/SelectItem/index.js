import React from "react";

import "./style.scss";
import Title from "../../components/Title";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import MyButton from "../../components/MyButton";
import { useSelector } from "react-redux";
function SelectItem() {
  const locationData = useSelector((state) => state.locations);
  const [selectLocation, setSelectLocation] = React.useState(0);

  return (
    <>
      <Title>Select Item</Title>
      <Container className="user-dashboard">
        <Row>
          <Col>
            <h2>An Existing Item</h2>
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
                <Form.Select defaultValue="Choose...">
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
              <Form.Group>
                <Form.Label>Room</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option value="Choose...">Choose...</option>

                  {locationData.length > 0 ? (
                    locationData[selectLocation].room.map((element, index) => {
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
              <Form.Group>
                <Form.Label>Item</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option value="Choose...">Choose...</option>

                  {locationData.length > 0 ? (
                    locationData[selectLocation].items.map((element, index) => {
                      return (
                        <option value={index} key={index}>
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
                  <Button className="select-form-btn" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <h2>An New Item</h2>
            <MyButton href="/request" style={{ marginTop: "35%" }}>
              New Item
            </MyButton>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SelectItem;
