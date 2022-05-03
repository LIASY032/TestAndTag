import React from "react";
import Title from "../../components/Title";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
function History() {
  const locationData = useSelector((state) => state.locations);
  const [selectLocation, setSelectLocation] = React.useState(0);
  return (
    <>
      <Title>History</Title>
      <Container className="user-dashboard">
        <Row>
          <Col>
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
                  <option>Choose...</option>
                  <option>...</option>
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
          <Col style={{ textAlign: "center" }}></Col>
        </Row>
      </Container>
    </>
  );
}

export default History;
