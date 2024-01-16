import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import dining1 from '../images/dining1.jpg'
import { useNavigate } from 'react-router'
// import { Link } from 'react-router-dom'

function ReservationPage() {

    const [occasion, setOccasion] = useState("")
   const [guests, setGuests] = useState("")
   const [date, setDate] = useState("")
   const [time, setTime] = useState("")

   const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault()
        navigate('/confirm')
        
    }

  return (
    <div style={{color: 'white', backgroundColor: '#495E57'}}>
         <Row>
                <Col>
                    <img src={dining1} alt='dining' width='100%'/>
                </Col>
            </Row>

        <Container>
            <Row className='py-3'>
                <h1 className='text-center'>Book a Table</h1>

          
                <Form onSubmit={submitHandler}>
                    <Form.Group as={Row} className='mb-3' >
                        <Form.Label>Date</Form.Label>
                        <Form.Control type='date' placeholder='date' value={date}
                            onChange={(e) => setDate(e.target.value)} required
                        />
                    </Form.Group>
                    
                    <Form.Group as={Row} className='mb-3' >
                        <Form.Label>Time</Form.Label>
                        <Form.Select value={time} onChange={(e) => setTime(e.target.value)} required>
                            <option>6:00PM</option>
                            <option>7:00PM</option>
                            <option>8:00PM</option>
                            <option>9:00PM</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group as={Row} className='mb-3' >
                        <Form.Label>Number of Guests</Form.Label>
                        <Form.Control min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required/>
                       
                    </Form.Group>

                    <Form.Group as={Row} className='mb-3'>
                        <Form.Label>Occasion</Form.Label>
                        <Form.Select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option>Birthday</option>
                        <option>Date</option>
                        <option>Anniversary</option>
                        <option>Proposal Dinner</option>
                        <option>Family Dinner</option>
                        <option>Hangout</option>
                        <option>Others</option>
                    </Form.Select>
                    </Form.Group>
                   
                   <Form.Group as={Row} className='mb-5 ' >
                        <Button type='submit' variant='success'>Continue</Button>
                        
                   </Form.Group>
                   
                </Form>

            </Row>
        </Container>
    </div>
  )
}

export default ReservationPage