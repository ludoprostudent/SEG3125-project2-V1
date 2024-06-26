import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';

import './CheckoutEquipmentCard.css';

const CheckoutEquipmentCard = ({ item }) => {

    const { removeFromCart } = useContext(CartContext);

    return (
        <Card className='item-card'>
            <Row className='row12'>
                <Col md={4} className="image-col2">
                    <img src={item.image} className="item-image" />
                </Col>
                <Col md={6} className="item-desc">
                    <h1 className="section-subtitle">{item.name}</h1>
                    <p>{item.desc}</p>
                    <p><i className="bi bi-people"></i> {item.capacity} passengers</p>
                </Col>
                <Col md={2} className="utility-col">
                    <Row className='utility-row'>
                        <Button variant="link" onClick={() => removeFromCart(item.id)}>
                            <i className="bi bi-trash trash-icon"></i>
                        </Button>
                    </Row>
                    <Row className='utility-row'>
                        <p>{item.price} $/day</p>
                    </Row>
                </Col>
            </Row>
        </Card>

    );
}

export default CheckoutEquipmentCard;