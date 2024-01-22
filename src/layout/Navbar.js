import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="container-fluid px-5">
      <Navbar.Brand as={Link} to="/parfumstore">
      <img src="https://img.icons8.com/?size=256&id=wEM3TF9gdbiR&format=png" height="25" width="25"/> 
      Parfum Store
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/parfumstore" className="nav-link" aria-current="page">
            <i className="bi bi-house"></i> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="nav-link">
            <i className="fa-solid fa-list-ul"></i> Parfum Management
          </Nav.Link>
        </Nav>
        <form className="d-flex" role="search" style={{ marginLeft: "65%" }}>
          <button className="btn btn-outline-light " type="submit">
            <img src='https://img.icons8.com/?size=256&id=2212PsH6OEOq&format=png' height="25" width="25"/>
          </button>
        </form>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
