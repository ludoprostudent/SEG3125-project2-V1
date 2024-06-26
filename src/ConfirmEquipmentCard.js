import { Row, Col, Card } from 'react-bootstrap';

import './ConfirmEquipmentCard.css';

const ConfirmEquipmentCard = ({ item }) => {

    return (
        <Card className='conf-item-card'>
            <Row className='conf-row12'>
                <Col md={6} className="conf-image-col2">
                    <img src={item.image} className="conf-item-image" />
                </Col>
                <Col md={6} className="conf-item-desc">
                    <h1 className="conf-section-subtitle">{item.name}</h1>
                    <p>{item.desc}</p>
                    <p><i className="bi bi-people"></i> {item.capacity} passengers</p>
                </Col>
            </Row>
        </Card>

    );
}

export default ConfirmEquipmentCard;