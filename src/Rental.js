import { Container } from 'react-bootstrap';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import Header from './Header';
import EquipmentDisplay from './EquipmentDisplay';

import './Rental.css';

const Rental = () => {
    return (
        <div>
            <Header />
            <NavbarCustom
                isHomepage={false}
            />
            <Container className="rental-container">
                <div className="centered">
                    <h1 className="section-title">Rental Equipment</h1>
                </div>
            </Container>
            <EquipmentDisplay />
            <Footer />
        </div>
    );
}

export default Rental;