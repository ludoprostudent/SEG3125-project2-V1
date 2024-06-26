import { HashLink } from 'react-router-hash-link';

import { Container, Nav, Navbar, Badge } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';

import './NavbarCustom.css';

const NavbarCustom = ({ isHomepage }) => {

    const { cartItems } = useContext(CartContext);

    const cartSize = cartItems.length;

    return (
        <Navbar expand="lg" className="navbar" sticky="top" style={{ zIndex: '500' }}>
            <Container className="justify-content-center">
                <Nav className="mx-auto custom-nav-links">
                    {!isHomepage && (
                        <HashLink className="nav-link navbar-text" to="/#"  style={{color:'white'}}><b>Homepage</b></HashLink>
                    )}
                    <HashLink className="nav-link navbar-text" to="/#"><b>How to Rent</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/Rental#"><b>Rental Equipment</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/Compare#"><b>Compare Boats</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/safetyguides#"><b>Safety Guides</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/#about-us"><b>About Us</b></HashLink>
                    <HashLink className="nav-link navbar-text" to="/Checkout#"><i className="bi bi-cart"></i> <Badge bg="" className="custom-nav-badge">{cartSize}</Badge></HashLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarCustom;