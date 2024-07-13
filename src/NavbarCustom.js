import { HashLink } from 'react-router-hash-link';

import { Container, Nav, Navbar, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';


import LanguageSwitcher from './LanguageSwitcher';

import './NavbarCustom.css';

const NavbarCustom = ({ isHomepage }) => {

    const { cartItems } = useContext(CartContext);

    const cartSize = cartItems.length;

    const { t } = useTranslation();


    return (
        <Navbar expand="lg" className="navbar" sticky="top" style={{ zIndex: '500' }}>
            <Container className="justify-content-center">
                <Nav className="mx-auto custom-nav-links">
                    {!isHomepage && (
                        <HashLink className="nav-link navbar-text" to="/#" style={{ color: 'white' }}><b>{t('nav-homepage')}</b></HashLink>
                    )}
                    <HashLink className="nav-link navbar-text" to="/#"><b>{t('nav-howtorent')}</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/Rental#"><b>{t('nav-rentalequip')}</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/Compare#"><b>{t('nav-compare')}</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/safetyguides#"><b>{t('nav-safety')}</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/#about-us"><b>{t('nav-about')}</b></HashLink>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip className="custom-tooltip">View your cart and checkout</Tooltip>}
                    >
                        <HashLink className="nav-link navbar-text" to="/Checkout#"><i className="bi bi-cart"></i> <Badge bg="" className="custom-nav-badge">{cartSize}</Badge></HashLink>
                    </OverlayTrigger>
                </Nav>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="custom-tooltip">Change your language preference</Tooltip>}
                >
                    <LanguageSwitcher />
                </OverlayTrigger>
            </Container>
        </Navbar>
    );
};

export default NavbarCustom;