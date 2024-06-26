import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HomeSectionComponent.css';

const HomeSectionComponent = ({ Title, Content, Image }) => {
    return (
        <Container className="home-section-container">
            <Row className='home-section-row'>
                <Col md={7} className="text-col">
                    <h1 className="section-title654">{Title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: Content }} className='home-component-text'/>
                </Col>
                <Col md={5} className="image-col">
                    <img src={Image} className="image" />
                </Col>
            </Row>
        </Container>
    );
}

export default HomeSectionComponent;