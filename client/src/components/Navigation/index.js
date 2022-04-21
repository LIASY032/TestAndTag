import React from "react";

import "./style.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
function Navigation() {
  return (
    <Navbar style={{ backgroundColor: "#8f8e8e" }} expand="lg">
      <Container>
        <Navbar.Brand href="/">Test And Tag</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>

            <Nav.Link href="/tester">Authorised</Nav.Link>
            <Nav.Link>
              <PersonCircle size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
