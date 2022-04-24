import React from 'react'
import SiderMenu from '../components/SiderMenu'
import { Row, Col, Container, Card, Button, Form, ListGroup } from 'react-bootstrap'

function PlacesMoneySavingScreen() {
  const storages = ['purse', 'safe', 'card1']

  const onStorageClick = (e) => {
    console.log('Update form with data about:', e)
  }

  return (
    <Container>
      <Row>
        <Col sm={3}>
          <SiderMenu />
        </Col>
        <Col sm={9}>
          <Card className="text-center" bg='light'>
            <Card.Header>Where you store your money</Card.Header>
            <Card.Body>
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    {storages && storages.map((s) => (
                      <ListGroup.Item action onClick={() => onStorageClick(s)} className='mb-1' key={s}>{s}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                          <Form.Label column sm={3}>
                            Name
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control type="email" />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                          <Form.Label column sm={3}>
                            Description
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control as="textarea" rows={2} />
                          </Col>
                        </Form.Group>
                        <fieldset>
                          <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                              Icons
                            </Form.Label>
                            <Col sm={3}>
                              <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                              />
                              <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                              />
                              <Form.Check
                                type="radio"
                                label="third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                              />
                            </Col>
                            <Col sm={3}>
                              <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                              />
                              <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                              />
                              <Form.Check
                                type="radio"
                                label="third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                              />
                            </Col>
                            <Col sm={3}>
                              <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                              />
                              <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                              />
                              <Form.Check
                                type="radio"
                                label="third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                              />
                            </Col>
                          </Form.Group>
                        </fieldset>

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

export default PlacesMoneySavingScreen