import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

function HomeScreen() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="outcome" title="Outcome">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="income" title="Income">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="transfer" title="Transfer">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="exchange" title="Exchange">
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  )
}

export default HomeScreen