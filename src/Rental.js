import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import Header from './Header';
import EquipmentDisplay from './EquipmentDisplay';

import './Rental.css';

const Rental = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <NavbarCustom
                isHomepage={false}
                role="navigation"
            />
            <Container className="rental-container">
                <div className="centered">
                    <h1 className="section-title">{t('rental-title')}</h1>
                </div>
            </Container>
            <EquipmentDisplay />
            <Footer />
        </div>
    );
}

export default Rental;
