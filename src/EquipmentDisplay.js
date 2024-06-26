import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import StickyBox from "react-sticky-box";

import EquipmentCard from './EquipmentCard';

import './EquipmentDisplay.css';

const EquipmentDisplay = () => {

    const maxCapacity = 20;

    const [equipment, setEquipment] = useState([]);
    const [filteredEquipment, setFilteredEquipment] = useState([]);

    const [categoryFilters, setCategoryFilters] = useState({});
    const [typeFilters, setTypeFilters] = useState({});
    const [capacityRange, setCapacityRange] = useState(maxCapacity);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });


    //   get equipment data from the json file
    useEffect(() => {
        fetch('/equipment.json')
            .then(response => response.json())
            .then(data => {
                setEquipment(data);
                setFilteredEquipment(data);
            })
            .catch(error => console.error('Error', error));
    }, []);

    useEffect(() => {
        let filteredData = [...equipment];

        // category filters
        if (Object.values(categoryFilters).some(filter => filter)) {
            filteredData = filteredData.filter(item => categoryFilters[item.category]);
        }

        // type filters
        if (Object.values(typeFilters).some(filter => filter)) {
            filteredData = filteredData.filter(item => typeFilters[item.type]);
        }

        // capacity range filter
        if (capacityRange !== '') {
            filteredData = filteredData.filter(item => item.capacity <= parseInt(capacityRange));
        }

        // price range filter
        if (priceRange.min !== '' && priceRange.max !== '') {
            filteredData = filteredData.filter(item => item.price >= parseInt(priceRange.min) && item.price <= parseInt(priceRange.max));
        }

        setFilteredEquipment(filteredData);
    }, [equipment, categoryFilters, typeFilters, capacityRange, priceRange]);

    // EVENT HANDLERS
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
// value not neg check
        if (value >= 0) {
            setPriceRange({
                ...priceRange,
                [name]: value
            });
        }
    };

    //   prevents default behavior for forms
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container fluid>
            <Row>
                {/* faceted search column */}
                <Col sm={12} md={4} lg={3}>
                    <StickyBox offsetTop={100} offsetBottom={20}>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    {/* category filters */}
                                    <Form.Group>
                                        <Form.Label className="filter-title"><b>Category:</b></Form.Label>
                                        <Form.Check
                                            type="checkbox"
                                            label="Water Toys"
                                            checked={categoryFilters['water toys']}
                                            onChange={() => handleCategoryChange('water toys')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Jet Ski"
                                            checked={categoryFilters['jet ski']}
                                            onChange={() => handleCategoryChange('jet ski')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Boat"
                                            checked={categoryFilters['boat']}
                                            onChange={() => handleCategoryChange('boat')}
                                        />
                                    </Form.Group>

                                    {/* type filters */}
                                    <Form.Group>
                                        <Form.Label className="filter-title"><b>Type:</b></Form.Label>
                                        <Form.Check
                                            type="checkbox"
                                            label="Yacht"
                                            checked={typeFilters['yacht']}
                                            onChange={() => handleTypeChange('yacht')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Pontoon"
                                            checked={typeFilters['pontoon']}
                                            onChange={() => handleTypeChange('pontoon')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Sailboat"
                                            checked={typeFilters['sailboat']}
                                            onChange={() => handleTypeChange('sailboat')}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Fishing Boat"
                                            checked={typeFilters['fishing boat']}
                                            onChange={() => handleTypeChange('fishing boat')}
                                        />
                                    </Form.Group>

                                    {/* capacity filter */}
                                    <Form.Group>
                                        <Form.Label className="filter-title"><b>Capacity Range:</b></Form.Label>
                                        <Form.Control
                                            type="range"
                                            min="1"
                                            max={maxCapacity}    // TODO maybe change?
                                            value={capacityRange}
                                            onChange={(e) => setCapacityRange(e.target.value)}
                                            className='custom-range'
                                        />
                                        <p className="filter-subtitle">Selected Capacity : {capacityRange}</p>
                                    </Form.Group>

                                    {/* price filter */}
                                    <Form.Group>
                                        <Form.Label className="filter-title"><b>Price Range:</b></Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Label className="filter-subtitle">Minimum:</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Minimum $"
                                                    name="min"
                                                    value={priceRange.min}
                                                    onChange={handlePriceChange}
                                                />
                                            </Col>
                                            <Col>
                                                <Form.Label className="filter-subtitle">Maximum:</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Maximum $"
                                                    name="max"
                                                    value={priceRange.max}
                                                    onChange={handlePriceChange}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>

                                </Form>
                            </Card.Body>
                        </Card>
                    </StickyBox>
                </Col>

                {/* equipment cards column */}
                <Col sm={12} md={8} lg={9}>
                    <Row>
                        {filteredEquipment.map(item => (
                            // lg={6} for 2 wide or lg={4} for 3 wide
                            <Col key={item.id} lg={6} className="mb-3"> 
                                <EquipmentCard
                                item = {item}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default EquipmentDisplay;
