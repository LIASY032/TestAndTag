import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
function Navigation() {
  return (
    <Navbar style={{ backgroundColor: "#8f8e8e" }} expand="lg">
      <Container style={{ color: "white" }}>
        <Navbar.Brand href="/">Test And Tag</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/request">Request</Nav.Link>

            <Nav.Link href="/user">User</Nav.Link>
            <Nav.Link>
              <PersonCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
