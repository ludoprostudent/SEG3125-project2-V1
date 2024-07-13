import { Container } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import Header from './Header';
import ConfirmEquipmentCard from './ConfirmEquipmentCard';

const Confirmation = () => {
    const { rentedItems } = useContext(CartContext);
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <NavbarCustom role="navigation" isHomepage={false} />
            <Container>
                <div className="centered">
                    <h1 className="section-title">{t('confirmation-title')}</h1>
                </div>
                <p className='centered'>{t('confirmation-success')}</p>
                <>
                    {rentedItems.map(item => (
                        <ConfirmEquipmentCard
                            key={item.id} // Add a unique key for each item
                            item={item}
                        />
                    ))}
                </>
            </Container>
            <Footer />
        </div>
    );
}

export default Confirmation;
