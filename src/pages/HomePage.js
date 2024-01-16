import React from 'react'
import { Row, Col, Container, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import food1 from '../images/food1.jpg'
import food22 from '../images/food22.jpg'
import foodie from '../images/foodie.jpg'


function HomePage() {
  return (
    <div>
        <div className='showcase py-4'>
            <Container>
                <Row>
                    <Col className='py-3'>
                        <h1>Little Lemon</h1> 
                        <h2>Lagos</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  
                        </p>
                        <Link to='/reservation'><Button className='rounded-5 px-4 my-3' variant='success'>Reserve a Table</Button></Link>
                    </Col>

                    <Col className='text-center py-3'>
                        <img src={food1} alt='food' width='390px'/>
                    </Col>
                </Row>
            </Container>
       
        </div>
{/*  */}
        <div className='py-3 specials'>
            <Container>
                <Row className='my-3'>
                    <Col className='text-center'><h1>Our Specials</h1></Col>
                    <Col className='text-center'><Button className='rounded-5 px-4' variant='success'>Online Menu</Button></Col>
                </Row>

                <Row className='py-3 mt-3'>
                    <Col className='mb-5 d-flex align-items-center  
                        justify-content-center'>
                        <Card style={{ width: '18rem', backgroundColor: '#495E57', color: 'white' }}>
                            <Card.Img variant="top" src={food22} height='188px'/>
                            <Card.Body>
                                <Card.Title>Amala and Ewedu</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className="rounded-5" variant='success'>Order a Delivery</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='mb-5 d-flex align-items-center  
                        justify-content-center'>
                        <Card style={{ width: '18rem', backgroundColor: '#495E57', color: 'white' }}>
                            <Card.Img variant="top" src={food22} height='188px' />
                            <Card.Body>
                                <Card.Title>Amala and Ewedu</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className="rounded-5" variant='success'>Order a Delivery</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='mb-5 d-flex align-items-center  
                        justify-content-center'>
                        <Card style={{ width: '18rem', backgroundColor: '#495E57', color: 'white' }}>
                            <Card.Img variant="top" src={food22} height='188px'/>
                            <Card.Body>
                                <Card.Title>Amala and Ewedu</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className="rounded-5" variant='success'>Order a Delivery</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='py-5 ' style={{backgroundColor: 'rgba(0, 0, 0, 0.89)'}}>
            <Container>
                <Row className='mb-5'>
                    <Col><h1>New Additions to our Menu</h1></Col>
                </Row>

                <Row>
                    <Col sm={12} md={6} lg={4}  className='mb-3'>
                        <Card className="bg-dark text-white">
                            <Card.Img src={foodie} alt="Card image" height='190px' />
                            <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    <Col sm={3} md={6} lg={4} className='mb-3'>
                        <Card className="bg-dark text-white">
                            <Card.Img src={foodie} alt="Card image" height='190px' />
                            <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    <Col sm={3} md={6} lg={4} className='mb-3'>
                        <Card className="bg-dark text-white">
                            <Card.Img src={foodie} alt="Card image" height='190px' />
                            <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='py-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.89)', color: 'white'}}>
        <Container>
                <Row>
                    <Col className='py-5'>
                        <h1>Little Lemon</h1> 
                        <h2>Lagos</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  
                        </p>
                    </Col>

                    <Col className='text-center py-3'>
                        <img src={food1} alt='food' width='390px'/>
                    </Col>
                </Row>
            </Container>
        
        </div>
        
    </div>
  )
}

export default HomePage