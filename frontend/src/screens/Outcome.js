import React, { useState, useEffect } from 'react'
import { Form, Button, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listCurrencies } from '../actions/currencyActions'

function Outcome() {
  // const [currency, setCurrency] = useState(currencies[0])
  const dispatch = useDispatch()
  const currencyList = useSelector(state => state.currencyList)
  const {error, loading, currencies} = currencyList

  useEffect(() => {
    dispatch(listCurrencies())
  }, [dispatch])


  return (
    <Form>
      <Form.Group className="mb-3" controlid="formCalendaDay">
        <Form.Label>Input outcome for date</Form.Label>
        <Form.Control type="date" placeholder="Enter date" />
      </Form.Group>

      

      <Form.Select aria-label="Money source selector">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      <Form.Group className="mb-3" controlid="formComment">
        <Form.Control type="string" placeholder="Comment" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Outcome