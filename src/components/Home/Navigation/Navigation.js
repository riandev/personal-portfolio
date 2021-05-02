import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='sticky-top bg-white'>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/home">
          <h3 className='container'>RIAN</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              style={{ color: "#1cc7c1" }}
              className="mr-5"
              as={Link}
              to="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: "#1cc7c1" }}
              className="mr-5"
              as={Link}
              to="/expertise"
            >
              Expertise
            </Nav.Link>
            <Nav.Link
              style={{ color: "#1cc7c1" }}
              className="mr-5"
              as={Link}
              to="/portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              style={{ color: "#1cc7c1" }}
              className="mr-5"
              as={Link}
              to="/reviews"
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              style={{ color: "#1cc7c1" }}
              className="mr-5"
              as={Link}
              to="/resume"
            >
              Resume
            </Nav.Link>
            <Nav.Link
              style={{ color: "#1cc7c1" }}
              className="mr-5"
              as={Link}
              to="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
