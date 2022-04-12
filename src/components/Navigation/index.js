import React from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
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
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/request">request</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

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
