
import { Link } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import Header from './Header';
import CheckoutEquipmentCard from './CheckoutEquipmentCard';

import './Checkout.css';

const Checkout = () => {

    const { cartItems, checkoutCart, cartCost } = useContext(CartContext);

    const checkoutItems = () => {
        checkoutCart();
    }

    return (
        <div>
            <Header />
            <NavbarCustom
                isHomepage={false}
            />
            <Container className="checkout-container">
                <div className="centered">
                    <h1 className="section-title">Checkout</h1>
                </div>
                <div className='subsection'>
                    <h2 className='section-subtitle'>Your Information:</h2>
                    <Row className='form-padding'>
                        <Col md={4}>
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Enter Full Name'
                                className='input-field'
                            />
                        </Col>
                        <Col md={4} className='col-padding'>
                            <Row>
                                <Col md={6}>
                                    <Form.Label>Age:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder='Enter Age'
                                        className='age-input-field'
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Date of rent:</Form.Label>
                                    <Form.Control
                                        type="date"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='form-padding'>
                        <Col md={4}>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder='Enter email'
                                className='input-field'
                            />
                        </Col>
                        <Col md={4} className='col-padding'>
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder='Enter Phone Number'
                                className='input-field'
                            />
                        </Col>
                    </Row>
                </div>
                <div className='subsection'>
                    <Row>
                        <Col md={6}>
                            <h2 className='section-subtitle'>Items in your cart:</h2>
                        </Col>
                        <Col md={6}>
                            {cartItems.length === 0 ? (
                                <></>
                            ) : (
                                <h2 className='section-subtitle justify-right'>Total: {cartCost} $</h2>
                            )}
                        </Col>
                    </Row>
                    {cartItems.length === 0 ? (
                        <p className='centered'>Your cart is empty.</p>
                    ) : (
                        <>
                            {cartItems.map(item => (
                                <CheckoutEquipmentCard
                                    item={item}
                                />
                            ))}
                            <Row>
                                <Col md={6} className='justify-right'>
                                    <HashLink className="nav-link" as={Link} to="/#">
                                        <Button className='checkout-button' style={{backgroundColor:''}}>Cancel Checkout</Button>
                                    </HashLink>
                                </Col>
                                <Col md={6} className='justify-left'>
                                    <HashLink className="nav-link" as={Link} to="/confirmation#">
                                        <Button onClick={() => checkoutItems()} className='checkout-button'>Complete Checkout</Button>
                                    </HashLink>
                                </Col>
                            </Row>
                        </>
                    )}
                </div>

            </Container>
            <Footer />
        </div>
    );
}

export default Checkout;