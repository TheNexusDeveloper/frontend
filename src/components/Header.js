import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../images/logo.jpg'

function Header() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark"  bg='dark'>
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt='logo' width="250px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Menu</Nav.Link>
            <Nav.Link href='/reservation'>Reservation</Nav.Link>
            <Nav.Link href="#pricing">Order</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header