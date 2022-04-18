import React from 'react'
import SiderMenu from '../components/SiderMenu'
import Chart from '../components/Chart'
import { Row, Col, Container } from 'react-bootstrap'

function IncomeCategories() {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <SiderMenu />
        </Col>
        <Col sm={4}>
          Income categories
        </Col>
        <Col sm={5}>
          <Chart />
        </Col>
      </Row>
    </Container>
  )
}

export default IncomeCategories