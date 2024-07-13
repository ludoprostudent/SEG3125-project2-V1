import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

import './AboutSectionComponent.css';

const AboutSectionComponent = () => {
    const { t } = useTranslation();

    return (
        <Container className="about-section-container" id="about-us">
            <Row>
                <Col md={5} className="text-col1">
                    <div>
                        <Card className="customcard" style={{ backgroundColor: 'inherit', border: 'None' }}>
                            <Card.Title className="card-title1" style={{color:'white'}}><b>{t('about-contact')}</b></Card.Title>
                            <Card.Body className="card-content1">
                                <p style={{color:'white'}}><i className="bi bi-telephone"></i> {t('about-phone')}: (613)-333-4444</p>
                                <p style={{color:'white'}}><i className="bi bi-envelope"></i> {t('about-email')}: info@marinaadventures.ca</p>
                            </Card.Body>
                        </Card>
                        <hr className="div-line1" />
                        <Card className="customcard" style={{ backgroundColor: 'inherit', border: 'None' }}>
                            <Card.Title className="card-title1" style={{color:'white'}}><b>{t('about-hours')}</b></Card.Title>
                            <Card.Body className="card-content1">
                                <p style={{color:'white'}}><i className="bi bi-clock"></i> {t('about-hours-weekdays')}: 7AM - 9PM</p>
                                <p style={{color:'white'}}><i className="bi bi-clock"></i> {t('about-hours-saturday')}: 6AM - 11PM</p>
                                <p style={{color:'white'}}><i className="bi bi-clock"></i> {t('about-hours-sunday')}: 6AM - 11PM</p>
                            </Card.Body>
                        </Card>
                        <hr className="div-line1" />
                        <Card className="customcard" style={{ backgroundColor: 'inherit', border: 'None' }}>
                            <Card.Title className="card-title1" style={{color:'white'}}><b>{t('about-location')}</b></Card.Title>
                            <Card.Body className="card-content1">
                                <p style={{color:'white'}}><i className="bi bi-geo-alt"></i> {t('about-address')}: 123 Lake Road Ottawa, ON</p>
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
