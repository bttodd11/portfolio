import React from "react";
import { Nav } from 'react-bootstrap';
import './nav.css';



let nav = () => {
  return (
    <Nav className="justify-content-end navContainer " 
    activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="navLinks">
        <Nav.Link eventKey="link-1"> Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navLinks">
        <Nav.Link eventKey="link-3"> Socials</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default nav;
