import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const NavbarComponent = () => {
    return (
      <Navbar variant="dark" expand="lg">
          <Container>
          <Navbar.Brand href="/"><strong>E-Commerce</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    );
  };

  export default NavbarComponent;