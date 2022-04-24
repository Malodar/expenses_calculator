import React, { useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux'
import { sendEmail } from '../actions/emailActions'


function ContactScreen() {
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false)
  const dispatch = useDispatch()
  const emailDetails = useSelector(state => state.email)
  const {loading, error, email} = emailDetails


  const onSubmit=(e)=>{
    dispatch(sendEmail({email: emailAddress, message: message}))
    setShowMessage(true)
  }

  return (
    <Container>
      <Row>
        {
          loading ?
            <Loader />
            : error
              ? <Message variant='danger'>{error}</Message>
              : (
                <>
                  <Message variant='success' hidden={!showMessage}>Message sent succesfully!</Message>
                  <h1 className='text-center mb-5'>Write me a message</h1>
                  <Col sm={4}>
                    <p className='mt-3'>
                      I will be glad to receive any feedback about this service or notifications about errors.
                    </p>
                  </Col>
                  <Col sm={6}>
                      <Form.Group className="mb-3 mt-3" controlId="contactForm.ControlEmail">
                        <Form.Label>Your email address for response</Form.Label>
                        <Form.Control name='emailAddress' type="email" onChange={(e) => setEmailAddress(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control name='message' as="textarea" rows={4} onChange={(e) => setMessage(e.target.value)} />
                      </Form.Group>

                      <Button variant="primary" type="submit" onClick={onSubmit}>
                        Send message
                      </Button>
                  </Col>
                </>
              )
        }
      </Row>
    </Container>
  )
}

export default ContactScreen