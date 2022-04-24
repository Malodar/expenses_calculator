import React, { useEffect, useState } from 'react'
import SiderMenu from '../components/SiderMenu'
import { Row, Col, Container, Card, Button, Form, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listCurrencies, addCurrency } from '../actions/currencyActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function Currencies() {
  const dispatch = useDispatch()
  const currencyList = useSelector(state => state.currencyList)
  const {error, loading, currencies} = currencyList
  const user = 1
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [isBasicCurrency, setIsBasicCurrency] = useState(false)

  useEffect(() => {
    dispatch(listCurrencies())
  }, [dispatch])

  const onCurrencyClick = (currency) => {
    setName(currency.name)
    setCode(currency.code)
    setIsBasicCurrency(currency.is_basic_currency)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addCurrency(user, name, code, isBasicCurrency))
    dispatch(listCurrencies())
    setName('')
    setCode('')
    setIsBasicCurrency(false)
  }
  
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <SiderMenu />
        </Col>
        <Col sm={9}>
          <Card className="text-center" bg='light'>
            <Card.Header>Money you are using</Card.Header>
            <Card.Body>
              <Row>
                <Col sm={4}>
                  {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                    : <ListGroup>
                        {currencies.map((s) => (
                          <ListGroup.Item
                            key={s.id}
                            action
                            onClick={() => onCurrencyClick(s)}
                            className='mb-1'>
                              {s.name}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                  }
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Form onSubmit={submitHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalUser" hidden>
                          <Form.Label column sm={3}>
                            User
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control type="input" />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                          <Form.Label column sm={3}>
                            Currency name
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCode">
                          <Form.Label column sm={3}>
                            Short code
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control type="text" onChange={(e) => setCode(e.target.value)} value={code}/>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalIsBasic">
                          <Form.Label column sm={3}>
                            Is basic currency
                          </Form.Label>
                          <Col sm={9} className='pt-2' style={{display:'flex', justifyContent:'left'}}>
                            <Form.Check type="checkbox" onChange={() => setIsBasicCurrency(!isBasicCurrency)} checked={isBasicCurrency}/>
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                          <Col>
                            <Button className='px-5' type="submit">Save</Button>
                          </Col>
                        </Form.Group>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Currencies