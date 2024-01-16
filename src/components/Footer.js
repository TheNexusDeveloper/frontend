import React from 'react'
import logo from '../images/logo.jpg'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer className='py-3'>
         <Container>
       <Row className='py-3 text-center'>
        <Col>
            <img src={logo} alt='logo' width="200px"/>
        </Col>

        <Col>
            <ul>
                <li><h1>Navigation</h1></li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>Order</li>
            </ul>
        </Col>

        <Col>
            <ul>
                <li><h1>Contact</h1></li>
                <li><p>
                        1A East-West Road, 
                        Elizabeth Avenue, 
                        Wisconsin, Gothom City. 
                    </p></li>

                <li><p>+1 234567890</p></li>

                <li><p>bookings@littlelemon.com</p></li>
            </ul>
        </Col>

        <Col>
            <ul>
                <li><h1>Policy</h1></li>
                <li>Order Policies</li>
                <li>Bookings</li>
                <li>Payments</li>
                <li>Corporate Social Responsibility</li>
            </ul>
        </Col>
       </Row>

       <Row>
        <Col className='text-center'><p>C. Little Lemon. All Rights Reserved</p></Col>
       </Row>
    </Container>
    </footer>
   
  )
}

export default Footer