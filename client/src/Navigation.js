import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <LinkContainer to="/">
        <Navbar.Brand>MovieDB</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link>Sign in</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register">
        <Nav.Link>Register</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
        <Nav.Link>About</Nav.Link>
      </LinkContainer>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar