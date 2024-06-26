import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';

import './EquipmentCard.css';

const EquipmentCard = ({ item }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <Card className='equipment-card213'>
            <Card.Img variant="top" src={item.image} className="equipment-image" />
            <Card.Body>
                <Card.Title className='card-title'>{item.name}</Card.Title>
                <Card.Text className='card-desc'>{item.desc}</Card.Text>
                <Row className='bottom-row1'>
                    <Col md={4} className='bottom-col'>
                        <p><i className="bi bi-people"></i> {item.capacity} passengers</p>
                    </Col>
                    <Col md={4} className='bottom-col'>
                        <p><i className="bi bi-credit-card"></i> {item.price} $/day</p>
                    </Col>
                    <Col md={4} className='bottom-col'>
                        <Button className='card-button' onClick={() => addToCart(item)}>Add to cart</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default EquipmentCard;
