import React from "react";

import Title from "../../../components/Title";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Details from "../../../components/Details";
function AuthorisedDashboard() {
  const [select, setSelect] = React.useState(0);
  const detail = [
    {
      id: "1",
      ownership: "Personal",
      description: "",
      expire_date: "13/4/2022",
      previous_test_date: "3/2/2021",
      purchased_date: "1/1/2021",
      location: "P building",
    },
    {
      id: "2",
      ownership: "UniSA",
      description: "",
      expire_date: "13/4/2022",
      previous_test_date: "1/1/2021",
      purchased_date: "1/1/2020",

      location: "F building",
    },
  ];
  return (
    <>
      <Title>Authorised Person</Title>
      <Container className="user-dashboard">
        <Row>
          <Col>
            To Do
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Ownership</th>
                  <th>Purchased Date</th>
                  <th>Description</th>
                  <th>Expire Date</th>
                  <th>Previous Tested Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {detail.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      setSelect(index);
                    }}
                  >
                    <td>{item.id}</td>
                    <td>{item.ownership}</td>
                    <td>{item.purchased_date}</td>
                    <td>{item.description}</td>
                    <td>{item.expire_date}</td>
                    <td>{item.previous_test_date}</td>
                    <td>{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col>
            Item Details
            <Details>{detail[select]}</Details>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AuthorisedDashboard;
