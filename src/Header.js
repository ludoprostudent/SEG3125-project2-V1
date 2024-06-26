import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Header.css';

import logo from './images/logo.jpg';

const Header = () => {
  return (
    <div className="header-container">
      <Container fluid className="header-content">
        <Row className="justify-content-center align-items-center text-center">
          <Col className="d-flex justify-content-center header-col">
            {/* <img src={logo} className="header-logo" /> */}
            <h1 className="header-title34">Marina Adventures</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;