
import { Container } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import Header from './Header';
import ConfirmEquipmentCard from './ConfirmEquipmentCard';


const Confirmation = () => {
    
    const { rentedItems } = useContext(CartContext);

    return (
        <div>
            <Header />
            <NavbarCustom
                isHomepage={false}
            />
            <Container>
                <div className="centered">
                    <h1 className="section-title">Order Completed</h1>
                </div>
                <p className='centered'>You have successfully rented the following item(s):</p>
                <>
                    {rentedItems.map(item => (
                        <ConfirmEquipmentCard
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