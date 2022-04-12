import React, {useState, useEffect} from 'react'
import { Tabs, Tab, Row, Col, Container } from 'react-bootstrap'
import Outcome from './Outcome'
import Income from './Income'
import Transfer from './Transfer'
import Exchange from './Exchange'
import { useDispatch, useSelector } from 'react-redux'


function HomeScreen() {
  const [activeTab, setActiveTab] = useState('outcome');
  const dispatch = useDispatch()
  
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Tabs 
            defaultActiveKey="profile" 
            id="controlled-tab-example" 
            className="mb-3"
            activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <Tab eventKey="outcome" title="Outcome">
              <Outcome />
            </Tab>
            <Tab eventKey="income" title="Income">
              <Income />
            </Tab>
            <Tab eventKey="transfer" title="Transfer">
              <Transfer />
            </Tab>
            <Tab eventKey="exchange" title="Exchange">
              <Exchange />
            </Tab>
          </Tabs>
        </Col>
        <Col sm={8}>
          Chart
        </Col>
      </Row>
    </Container>
    
  )
}

export default HomeScreen