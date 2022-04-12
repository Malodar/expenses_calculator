import React from 'react'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand>Expense Calculator</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Expense Calculator</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/news'>
                  <Nav.Link>News</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/faq'>
                  <Nav.Link>FAQ</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact'>
                  <Nav.Link>Contact us</Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header