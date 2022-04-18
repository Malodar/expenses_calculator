import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({variant, children, hidden=false}) {
  return (
    <Alert variant={variant} hidden={hidden}>
      {children}
    </Alert>
  )
}

export default Message