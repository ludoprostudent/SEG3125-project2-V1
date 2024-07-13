import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import './EquipmentCard.css';

const EquipmentCard = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    const { t } = useTranslation();

    return (
        <Card className='equipment-card'>
            <Card.Img variant="top" src={item.image} alt={item.name} className="equipment-image" />
            <Card.Body>
                <Card.Title className='card-title'>{item.name}</Card.Title>
                <Card.Text className='card-desc'>{item.desc}</Card.Text>
                <Row className='bottom-row'>
                    <Col md={4} className='bottom-col'>
                        <p><i className="bi bi-people"></i> {item.capacity} {t('passengers')}</p>
                    </Col>
                    <Col md={4} className='bottom-col'>
                        <p><i className="bi bi-credit-card"></i> {item.price} $/day</p>
                    </Col>
                    <Col md={4} className='bottom-col'>
                        <Button role="button" className='card-button' onClick={() => addToCart(item)}>
                            {t('addToCart')}
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default EquipmentCard;
