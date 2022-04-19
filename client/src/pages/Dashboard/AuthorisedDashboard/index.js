import React from "react";

import Title from "../../../components/Title";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
function AuthorisedDashboard() {
  return (
    <>
      <Title>Authorised Person</Title>
      <Container className="user-dashboard">
        <Row>
          <Col>
            History
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Ownership</th>
                  <th>Purchased Date</th>
                  <th>Description</th>
                  <th>Expire Date</th>
                  <th>Previous Tested Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>Item Details</Col>
        </Row>
      </Container>
    </>
  );
}

export default AuthorisedDashboard;
