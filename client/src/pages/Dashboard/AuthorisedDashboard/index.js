import React from "react";

import Title from "../../../components/Title";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Details from "../../../components/Details";
import MyTable from "../../../components/MyTable";
import MyButton from "../../../components/MyButton";
function AuthorisedDashboard() {
  const [select, setSelect] = React.useState(0);
  const header = [
    "Id",
    "Ownership",
    "Purchased Date",
    "Location",
    "Name",
    "Email",
    "Previous Tested Date",
    "Control",
  ];
  const detail = [
    {
      id: "1",
      ownership: "Personal",
      description: "",
      expire_date: "13/4/2022",
      previous_test_date: "3/2/2021",
      purchased_date: "1/1/2021",
      location: "P Building, Floor 1, Room 2",
      name: "Fan",
      email: "fan@example",
    },
    {
      id: "2",
      ownership: "UniSA",
      description: "",
      expire_date: "13/4/2022",
      previous_test_date: "1/1/2021",
      purchased_date: "1/1/2020",
      name: "Liang",
      location: "F Building, Floor 2, Room 2",
      email: "liang@example",
    },
  ];
  return (
    <>
      <Title>Authorised Person</Title>
      <Container className="user-dashboard">
        <Row>
          <Col>
            <MyTable header={header} title="TO DO">
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
                  <td>{item.location}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <td>{item.previous_test_date}</td>
                  <td>
                    <MyButton btn="red-btn" onClick={() => setSelect(item.id)}>
                      view
                    </MyButton>
                  </td>
                </tr>
              ))}
            </MyTable>
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
