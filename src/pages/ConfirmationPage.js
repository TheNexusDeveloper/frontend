import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ConfirmationPage() {
  return (
    <div className='text-center py-3'>
    <Container>
        <Row>
            <h1>Your Booking has been confirmed </h1>

            <Link to='/'> <Button type='submit' variant='success'>Home</Button></Link>
        </Row>
    </Container>
</div>
  )
}

export default ConfirmationPage