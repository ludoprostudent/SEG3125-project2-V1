import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useTranslation } from 'react-i18next';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import Header from './Header';

import './Compare.css';

import equipmentData from './equipment.json';

const Compare = () => {
    const { addToCart } = useContext(CartContext);
    const { t } = useTranslation();

    const [isButton1Disabled, setIsButton1Disabled] = useState(true);
    const [isButton2Disabled, setIsButton2Disabled] = useState(true);

    const [boats, setBoats] = useState([]);
    const [selection1, setSelection1] = useState({});
    const [selection2, setSelection2] = useState({});

    useEffect(() => {
        const boatArray = equipmentData.filter(item => item.type !== 'not boat');
        setBoats(boatArray);
    }, []);

    const handleBoatSelection = (boat, selectionNumber) => {
        if (selectionNumber === 1) {
            setSelection1(boat);
            document.getElementById("selectform1").setAttribute("hidden", true);
            setIsButton1Disabled(false);
        } else if (selectionNumber === 2) {
            setSelection2(boat);
            document.getElementById("selectform2").setAttribute("hidden", true);
            setIsButton2Disabled(false);
        }
    };

    const filteredBoatsForSelection1 = boats.filter(boat => boat.id !== selection2.id);
    const filteredBoatsForSelection2 = boats.filter(boat => boat.id !== selection1.id);

    function capitalizeFirstLetter(string) {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
    }

    return (
        <div>
            <Header />
            <NavbarCustom role="navigation" isHomepage={false} />
            <Container>
                <div className="centered">
                    <h1 className="section-title">{t('compare-title')}</h1>
                </div>
                <p className='centered'>{t('compare-instructions')}</p>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="boatSelection1">
                                <Form.Label>{t('compare-boat1-label')}</Form.Label>
                                <Form.Select onChange={(e) => handleBoatSelection(JSON.parse(e.target.value), 1)}>
                                    <option id="selectform1" value=""></option>
                                    {filteredBoatsForSelection1.map(boat => (
                                        <option key={boat.id} value={JSON.stringify(boat)}>
                                            {boat.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="boatSelection2">
                                <Form.Label>{t('compare-boat2-label')}</Form.Label>
                                <Form.Select onChange={(e) => handleBoatSelection(JSON.parse(e.target.value), 2)}>
                                    <option id="selectform2" value=""></option>
                                    {filteredBoatsForSelection2.map(boat => (
                                        <option key={boat.id} value={JSON.stringify(boat)}>
                                            {boat.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className='compimgdiv'>
                            <img src={selection1.image} alt={selection1.name} className="compare-image" />
                        </div>
                        <h2 className='subsection-title centered'>{selection1.name}</h2>
                    </Col>
                    <Col md={6}>
                        <div className='compimgdiv'>
                            <img src={selection2.image} alt={selection2.name} className="compare-image" />
                        </div>
                        <h2 className='subsection-title centered'>{selection2.name}</h2>
                    </Col>
                </Row>

                <hr className="div-line" />
                <div className="centered">
                    <h3 className="subsection-title2">{t('compare-capacity-title')}</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <p className='centered boat-info'><i className="bi bi-people"></i> {selection1.capacity} {t('passengers')}</p>
                    </Col>
                    <Col md={6}>
                        <p className='centered boat-info'><i className="bi bi-people"></i> {selection2.capacity} {t('passengers')}</p>
                    </Col>
                </Row>

                <hr className="div-line" />
                <div className="centered">
                    <h3 className="subsection-title2">{t('compare-price-title')}</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <p className='centered boat-info'><i className="bi bi-credit-card"></i> {selection1.price} $/day</p>
                    </Col>
                    <Col md={6}>
                        <p className='centered boat-info'><i className="bi bi-credit-card"></i> {selection2.price} $/day</p>
                    </Col>
                </Row>

                <hr className="div-line" />
                <div className="centered">
                    <h3 className="subsection-title2">{t('compare-type-title')}</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <p className='centered boat-info'>{capitalizeFirstLetter(selection1.type)}</p>
                    </Col>
                    <Col md={6}>
                        <p className='centered boat-info'>{capitalizeFirstLetter(selection2.type)}</p>
                    </Col>
                </Row>

                <hr className="div-line" />
                <Row className='buttonrow'>
                    <Col md={6} className='centered'>
                        <Button role="button" className='comparebuttonadd' onClick={() => addToCart(selection1)} disabled={isButton1Disabled}>
                            {t('compare-add-to-cart')}
                        </Button>
                    </Col>
                    <Col md={6} className='centered'>
                        <Button role="button" className='comparebuttonadd' onClick={() => addToCart(selection2)} disabled={isButton2Disabled}>
                            {t('compare-add-to-cart')}
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Compare;
