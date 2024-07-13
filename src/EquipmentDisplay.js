import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import StickyBox from "react-sticky-box";
import { useTranslation } from 'react-i18next';

import EquipmentCard from './EquipmentCard';
import './EquipmentDisplay.css';
import equipmentData123 from './equipment.json';

const EquipmentDisplay = () => {
    const { t } = useTranslation();
    const maxCapacity = 20;
    const [equipment, setEquipment] = useState([]);
    const [filteredEquipment, setFilteredEquipment] = useState([]);
    const [categoryFilters, setCategoryFilters] = useState({});
    const [typeFilters, setTypeFilters] = useState({});
    const [capacityRange, setCapacityRange] = useState(maxCapacity);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    useEffect(() => {
        setEquipment(equipmentData123);
        setFilteredEquipment(equipmentData123);
    }, []); 

    useEffect(() => {
        let filteredData = [...equipment];

        if (Object.values(categoryFilters).some(filter => filter)) {
            filteredData = filteredData.filter(item => categoryFilters[item.category]);
        }

        if (Object.values(typeFilters).some(filter => filter)) {
            filteredData = filteredData.filter(item => typeFilters[item.type]);
        }

        if (capacityRange !== '') {
            filteredData = filteredData.filter(item => item.capacity <= parseInt(capacityRange));
        }

        if (priceRange.min !== '' && priceRange.max !== '') {
            filteredData = filteredData.filter(item => item.price >= parseInt(priceRange.min) && item.price <= parseInt(priceRange.max));
        }

        setFilteredEquipment(filteredData);
    }, [equipment, categoryFilters, typeFilters, capacityRange, priceRange]);

    const handleCategoryChange = (category) => {
        setCategoryFilters({
            ...categoryFilters,
            [category]: !categoryFilters[category]
        });
    };

    const handleTypeChange = (type) => {
        setTypeFilters({
            ...typeFilters,
            [type]: !typeFilters[type]
        });
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        if (value >= 0) {
            setPriceRange({
                ...priceRange,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const resetFilters = () => {
        setCategoryFilters({});
        setTypeFilters({});
        setCapacityRange(maxCapacity);
        setPriceRange({ min: '', max: '' });
        setFilteredEquipment(equipment);
    };

    return (
        <Container fluid>
            <Row>
                <Col sm={12} md={4} lg={3}>
                    <StickyBox offsetTop={100} offsetBottom={20}>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label className="filter-title"><b>{t('equipment-category')}</b></Form.Label>
                                        <Form.Check
                                            type="checkbox"
                                            label={t('equipment-water-toys')}
                                            checked={categoryFilters['water toys']}
                                            onChange={() => handleCategoryChange('water toys')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label={t('equipment-jet-ski')}
                                            checked={categoryFilters['jet ski']}
                                            onChange={() => handleCategoryChange('jet ski')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label={t('equipment-boat')}
                                            checked={categoryFilters['boat']}
                                            onChange={() => handleCategoryChange('boat')}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="filter-title"><b>{t('equipment-type')}</b></Form.Label>
                                        <Form.Check
                                            type="checkbox"
                                            label={t('equipment-yacht')}
                                            checked={typeFilters['yacht']}
                                            onChange={() => handleTypeChange('yacht')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label={t('equipment-pontoon')}
                                            checked={typeFilters['pontoon']}
                                            onChange={() => handleTypeChange('pontoon')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label={t('equipment-sailboat')}
                                            checked={typeFilters['sailboat']}
                                            onChange={() => handleTypeChange('sailboat')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label={t('equipment-fishing-boat')}
                                            checked={typeFilters['fishing boat']}
                                            onChange={() => handleTypeChange('fishing boat')}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="filter-title"><b>{t('equipment-capacity-range')}</b></Form.Label>
                                        <Form.Control
                                            type="range"
                                            min="1"
                                            max={maxCapacity}
                                            value={capacityRange}
                                            onChange={(e) => setCapacityRange(e.target.value)}
                                            className='custom-range'
                                        />
                                        <p className="filter-subtitle">{t('equipment-selected-capacity')}: {capacityRange}</p>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="filter-title"><b>{t('equipment-price-range')}</b></Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Label className="filter-subtitle">{t('equipment-minimum')}:</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder={t('equipment-minimum-placeholder')}
                                                    name="min"
                                                    value={priceRange.min}
                                                    onChange={handlePriceChange}
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Label className="filter-subtitle">{t('equipment-maximum')}:</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder={t('equipment-maximum-placeholder')}
                                                    name="max"
                                                    value={priceRange.max}
                                                    onChange={handlePriceChange}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>

                                </Form>
                                <Button role="button" className='custom-button38' onClick={resetFilters}><i className="bi bi-trash"></i> {t('equipment-reset-filters')}</Button>
                            </Card.Body>
                        </Card>
                    </StickyBox>
                </Col>

                <Col sm={12} md={8} lg={9}>
                    <Row>
                        {filteredEquipment.map(item => (
                            <Col key={item.id} lg={6} className="mb-3"> 
                                <EquipmentCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default EquipmentDisplay;
