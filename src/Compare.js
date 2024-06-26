import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import Header from './Header';

import './Compare.css';

const Compare = () => {

    const { addToCart } = useContext(CartContext);

    const [isButton1Disabled, setisButton1Disabled] = useState(1);
    const [isButton2Disabled, setisButton2Disabled] = useState(1);

    const [boats, setBoats] = useState([]);
    const [selection1, setSelection1] = useState({});
    const [selection2, setSelection2] = useState({});

    // Fetch equipment data from json file
    useEffect(() => {
        fetch('/equipment.json')
            .then(response => response.json())
            .then(data => {
                const boatArray = data.filter(item => item.type !== 'not boat');
                setBoats(boatArray);
            })
            .catch(error => console.error('Error', error));
    }, []);

    // Function to handle boat selection from dropdown
    const handleBoatSelection = (boat, selectionNumber) => {
        if (selectionNumber === 1) {
            setSelection1(boat);
            document.getElementById("selectform1").setAttribute("hidden", true);
            setisButton1Disabled(0);
        } else if (selectionNumber === 2) {
            setSelection2(boat);
            document.getElementById("selectform2").setAttribute("hidden", true);
            setisButton2Disabled(0);
        }
    };

    // Capitalize first letter of boat type because too lazy to change it in json
    function capitalizeFirstLetter(string) {
        if (string == null) {
            return;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <Header />
            <NavbarCustom
                isHomepage={false}
            />
            <Container>
                <div className="centered">
                    <h1 className="section-title">Boat Comparison Tool</h1>
                </div>
                <p className='centered'>Select 2 boats from the following dropdown menus to compare them.</p>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="boatSelection1">
                                <Form.Label>Select Boat 1:</Form.Label>
                                <Form.Select onChange={(e) => handleBoatSelection(JSON.parse(e.target.value), 1)}>
                                    <option id="selectform1" value=""></option>
                                    {boats.map(boat => (
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
                                <Form.Label>Select Boat 2:</Form.Label>
                                <Form.Select onChange={(e) => handleBoatSelection(JSON.parse(e.target.value), 2)}>
                                    <option id="selectform2" value=""></option>
                                    {boats.map(boat => (
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
                            <img src={selection1.image} className="compare-image" />
                        </div>
                        <h2 className='subsection-title centered'>{selection1.name}</h2>
                    </Col>
                    <Col md={6}>
                        <div className='compimgdiv'>
                            <img src={selection2.image} className="compare-image" />
                        </div>
                        <h2 className='subsection-title centered'>{selection2.name}</h2>
                    </Col>
                </Row>

                <hr className="div-line" />
                <div className="centered">
                    <h3 className="subsection-title2">Maximum Capacity:</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <p className='centered boat-info'>{selection1.capacity} passengers</p>
                    </Col>
                    <Col md={6}>
                        <p className='centered boat-info'>{selection2.capacity} passengers</p>
                    </Col>
                </Row>

                <hr className="div-line" />
                <div className="centered">
                    <h3 className="subsection-title2">Renting Price:</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <p className='centered boat-info'>{selection1.price} $/day</p>
                    </Col>
                    <Col md={6}>
                        <p className='centered boat-info'>{selection2.price} $/day</p>
                    </Col>
                </Row>

                <hr className="div-line" />
                <div className="centered">
                    <h3 className="subsection-title2">Boat Type:</h3>
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
                        <Button className='comparebuttonadd' onClick={() => addToCart(selection1)} disabled={isButton1Disabled}>Add to cart</Button>
                    </Col>
                    <Col md={6} className='centered'>
                        <Button className='comparebuttonadd' onClick={() => addToCart(selection2)} disabled={isButton2Disabled}>Add to cart</Button>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </div>
    );
};

export default Compare;
