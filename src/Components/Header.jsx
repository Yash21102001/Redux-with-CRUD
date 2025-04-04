import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark" className="py-3 shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-black">
          Employee Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2 px-3 py-2 rounded text-light ">
              Add Employee
            </Nav.Link>
            <Nav.Link as={Link} to="/view" className="mx-2 px-3 py-2 rounded text-light">
              View Employees
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;