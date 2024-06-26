import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AccordionSingularComponent.css';

const AccordionSingularComponent = ({ Content1, Content2, Content3, Content4, Image }) => {
    return (
        <Container className="section-container">
            <Row>
                <Col md={7} className="text-col2">
                    <p>1. {Content1}</p>
                    <p>2. {Content2}</p>
                    <p>3. {Content3}</p>
                    <p>4. {Content4}</p>
                </Col>
                <Col md={5} className="image-col3">
                    <img src={Image} className="image" />
                </Col>
            </Row>
        </Container>
    );
}

export default AccordionSingularComponent;