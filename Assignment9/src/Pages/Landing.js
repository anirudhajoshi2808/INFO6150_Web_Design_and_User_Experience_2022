import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import "../styles/home.css"
function Landing() {
  return (
    <>
    
    <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
              <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <LinkContainer to="/menu">
                      <Nav.Link>Menu</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                      <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                  
                  <LinkContainer to="/contact">
                      <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/loginpage">
                      <Nav.Link>Loginpage</Nav.Link>
                  </LinkContainer>

              </Nav>
          </Navbar.Collapse>
      </Navbar>
      
      </>

  )
}

export default Landing
