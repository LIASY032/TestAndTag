import React from "react";

import { Form, Button } from "react-bootstrap";
function Details({ children }) {
  return (
    <>
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
        <Form.Group>
          <Form.Label>Ownership</Form.Label>
          <Form.Select defaultValue={children.ownership}>
            <option value="Personal">Personal</option>
            <option value="UniSA">UniSA</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control value={children.name} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control value={children.location} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Purchase Date</Form.Label>

          <Form.Control value={children.purchased_date} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Expire Date</Form.Label>
          <Form.Control value={children.expire_date} />
        </Form.Group>
        <Button type="submit" href="/expire-date">
          Pass
        </Button>
      </Form>
    </>
  );
}

export default Details;
