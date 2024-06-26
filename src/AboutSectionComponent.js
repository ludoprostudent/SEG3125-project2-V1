import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './AboutSectionComponent.css';

const AboutSectionComponent = () => {
    return (
        <Container className="about-section-container" id="about-us">
            <Row>
                <Col md={5} className="text-col1">
                    {/* <h1 className="section-title">About Us</h1> */}
                    <div>
                        <Card className="customcard" style={{ backgroundColor: 'inherit', border: 'None' }}>
                            <Card.Title class="card-title1" style={{color:'white'}}><b>How to Contact Us</b></Card.Title>
                            <Card.Body class="card-content1">
                                <p style={{color:'white'}}><i className="bi bi-telephone"></i> Phone number: (613)-333-4444</p>
                                <p style={{color:'white'}}><i className="bi bi-envelope"></i> E-mail: info@marinaadventures.ca</p>
                            </Card.Body>
                        </Card>
                        <hr className="div-line1" />
                        <Card className="customcard" style={{ backgroundColor: 'inherit', border: 'None' }}>
                            <Card.Title class="card-title1" style={{color:'white'}}><b>Hours</b></Card.Title>
                            <Card.Body class="card-content1">
                                <p style={{color:'white'}}><i className="bi bi-clock"></i> Monday to Friday: 7AM - 9PM</p>
                                <p style={{color:'white'}}><i className="bi bi-clock"></i> Saturday: 6AM - 11PM</p>
                                <p style={{color:'white'}}><i className="bi bi-clock"></i> Sunday: 6AM - 11PM</p>
                            </Card.Body>
                        </Card>
                        <hr className="div-line1" />
                        <Card className="customcard" style={{ backgroundColor: 'inherit', border: 'None' }}>
                            <Card.Title class="card-title1" style={{color:'white'}}><b>Location</b></Card.Title>
                            <Card.Body class="card-content1">
                                <p style={{color:'white'}}><i className="bi bi-geo-alt"></i> 123 Lake Road Ottawa, ON</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md={7} className="image-col1">
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21857.276095377158!2d-75.85414801348537!3d46.78146114741918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1719775841586!5m2!1sen!2sca"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutSectionComponent;