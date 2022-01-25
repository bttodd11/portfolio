import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import './nav.css';



let nav = props => {
  return (
    <Navbar className="navContainer" collapseOnSelect expand="lg" variant="dark">
  <Container fluid>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="navLinks justify-content-end flex-grow-1 pe-3">
     <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#">Projects</Nav.Link>
      <Nav.Link href="#connect">Connect</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default nav;
