import React, { useState } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'

function ContactInfoPage() {
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone , setPhone] = useState('')
    const [specialRequest, setSpecialRequest] = useState('')

    // const submitHandler = ()

  return (
    <div>
        
            <Row style={{backgroundColor: '#495E57'}} className='py-3'>
                <Container>
                    <h1 className='text-center'>CONTACT INFORMATION</h1>
                </Container>
            
            </Row>
        

        <Container>
            <Row className='py-3'>
                <Form>
                    <Form.Group as={Row} className='mb-3' >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='text' placeholder='First Name' 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            required 
                        />
                    </Form.Group>

                    <Form.Group as={Row} className='mb-3' >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text' placeholder='Last Name' value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            required 
                        />
                    </Form.Group>

                    <Form.Group as={Row} className='mb-3' >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        />
                    </Form.Group>

                    <Form.Group as={Row} className='mb-3' >
                        <Form.Label>Phone No</Form.Label>
                        <Form.Control type='number' placeholder='Phone No' value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                            />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Special Requests</Form.Label>
                        <Form.Control as="textarea" rows={5} value={specialRequest} 
                            onChange={(e) => setSpecialRequest(e.target.value)} 
                        />
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

export default ContactInfoPage