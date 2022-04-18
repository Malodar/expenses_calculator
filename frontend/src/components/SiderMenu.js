import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Accordion } from 'react-bootstrap';

function SiderMenu() {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <LinkContainer to='/'>
        <Nav.Link>Enter operations</Nav.Link>
      </LinkContainer>
      <Accordion defaultActiveKey="0" as='div' flush className='menu'>
        <Accordion.Item eventKey="1" >
          <Accordion.Header as='div'>Vocabulary</Accordion.Header>
          <Accordion.Body>
            <LinkContainer to='/expenses-categories'>
              <NavDropdown.Item eventKey="1">Expense categories</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/income-categories'>
              <NavDropdown.Item eventKey="2">Income categories</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/places-money-saving'>
              <NavDropdown.Item eventKey="3">Places of money saving</NavDropdown.Item>
            </LinkContainer>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <LinkContainer to='/budget-planning'>
        <Nav.Link>Budget planning</Nav.Link>
      </LinkContainer>
    </Nav>
  )
}

export default SiderMenu