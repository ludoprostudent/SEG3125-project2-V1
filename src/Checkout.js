import { Link, useNavigate } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { Container, Row, Col, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import Header from './Header';
import CheckoutEquipmentCard from './CheckoutEquipmentCard';

import './Checkout.css';

const Checkout = () => {
    const { cartItems, checkoutCart, cartCost } = useContext(CartContext);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        rentDate: '',
        email: '',
        phoneNumber: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const checkoutItems = () => {
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            checkoutCart();
            navigate('/confirmation');
        } else {
            setFormErrors(errors);
        }
    }

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName) errors.fullName = t('checkout-error-fullname');
        if (!formData.age || formData.age <= 0) errors.age = t('checkout-error-age');
        if (!formData.rentDate) errors.rentDate = t('checkout-error-rentdate');
        if (!formData.email) errors.email = t('checkout-error-email');
        if (!formData.phoneNumber) errors.phoneNumber = t('checkout-error-phone');
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    return (
        <div>
            <Header />
            <NavbarCustom role="navigation" isHomepage={false} />
            <Container className="checkout-container">
                <div className="centered">
                    <h1 className="section-title">{t('checkout-title')}</h1>
                </div>
                <div className='subsection'>
                    <h2 className='section-subtitle'>{t('checkout-info-title')}:</h2>
                    <Row className='form-padding'>
                        <Col md={4}>
                            <Form.Label>{t('checkout-fullname')}: <span style={{ color: 'red' }}>*</span></Form.Label>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip className="custom-tooltip">{t('checkout-tooltip-fullname')}</Tooltip>}
                            >
                                <Form.Control
                                    type="text"
                                    placeholder={t('checkout-placeholder-fullname')}
                                    className='input-field'
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </OverlayTrigger>
                            {formErrors.fullName && <div className="error-message">{formErrors.fullName}</div>}
                        </Col>
                        <Col md={4} className='col-padding'>
                            <Row>
                                <Col md={6}>
                                    <Form.Label>{t('checkout-age')}: <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip className="custom-tooltip">{t('checkout-tooltip-age')}</Tooltip>}
                                    >
                                        <Form.Control
                                            type="number"
                                            placeholder={t('checkout-placeholder-age')}
                                            className='age-input-field'
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                        />
                                    </OverlayTrigger>
                                    {formErrors.age && <div className="error-message">{formErrors.age}</div>}
                                </Col>
                                <Col md={6}>
                                    <Form.Label>{t('checkout-rentdate')}: <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip className="custom-tooltip">{t('checkout-tooltip-rentdate')}</Tooltip>}
                                    >
                                        <Form.Control
                                            type="date"
                                            name="rentDate"
                                            value={formData.rentDate}
                                            onChange={handleChange}
                                        />
                                    </OverlayTrigger>
                                    {formErrors.rentDate && <div className="error-message">{formErrors.rentDate}</div>}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='form-padding'>
                        <Col md={4}>
                            <Form.Label>{t('checkout-email')}: <span style={{ color: 'red' }}>*</span></Form.Label>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip className="custom-tooltip">{t('checkout-tooltip-email')}</Tooltip>}
                            >
                                <Form.Control
                                    type="email"
                                    placeholder={t('checkout-placeholder-email')}
                                    className='input-field'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </OverlayTrigger>
                            {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                        </Col>
                        <Col md={4} className='col-padding'>
                            <Form.Label>{t('checkout-phone')}: <span style={{ color: 'red' }}>*</span></Form.Label>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip className="custom-tooltip">{t('checkout-tooltip-phone')}</Tooltip>}
                            >
                                <Form.Control
                                    type="number"
                                    placeholder={t('checkout-placeholder-phone')}
                                    className='input-field'
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </OverlayTrigger>
                            {formErrors.phoneNumber && <div className="error-message">{formErrors.phoneNumber}</div>}
                        </Col>
                    </Row>
                </div>
                <div className='subsection'>
                    <Row>
                        <Col md={6}>
                            <h2 className='section-subtitle'>{t('checkout-cart-title')}:</h2>
                        </Col>
                        <Col md={6}>
                            {cartItems.length === 0 ? (
                                <></>
                            ) : (
                                <h2 className='section-subtitle justify-right'>{t('checkout-total')}: {cartCost} $</h2>
                            )}
                        </Col>
                    </Row>
                    {cartItems.length === 0 ? (
                        <p className='centered'>{t('checkout-empty-cart')}</p>
                    ) : (
                        <>
                            {cartItems.map(item => (
                                <CheckoutEquipmentCard key={item.id} item={item} />
                            ))}
                            <Row>
                                <Col md={6} className='justify-right'>
                                    <HashLink className="nav-link" as={Link} to="/#">
                                        <Button role="button" className='checkout-button'>{t('checkout-cancel')}</Button>
                                    </HashLink>
                                </Col>
                                <Col md={6} className='justify-left'>
                                    <Button
                                        onClick={checkoutItems}
                                        className='checkout-button'
                                        role="button"
                                    >
                                        {t('checkout-complete')}
                                    </Button>
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
