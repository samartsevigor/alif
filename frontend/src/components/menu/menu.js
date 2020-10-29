import React, {useEffect, useState} from 'react';
import {Row, Col, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from 'axios'
import './menu.css'

const Menu = () => {
    const [dishes, setDishes] = useState([])
    useEffect(() => {
        axios.get('/api/dishes/').then(({data}) => setDishes(data))
    }, [])

    return (
        <Row>
            {
                dishes.map((dish) => (
                    <Col lg={4}>
                        <Card className="mb-3 d-flex">
                            <Link to={`/dish/${dish.id}`}>
                                <Card.Img variant="top" src={dish.image}/>
                                <Card.Body>
                                    <Card.Title>{dish.name}</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
};

export default Menu;