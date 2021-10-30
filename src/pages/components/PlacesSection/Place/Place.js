import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = ({ place }) => {
    const { name, country, picture, _id, price } = place;
    return (
        <Col>
            <Card className="place">
                <span className="place-img">
                    <Card.Img variant="top" src={picture} />
                </span>

                <Card.Body>
                    <Card.Title>{name}  </Card.Title>

                    <span className="d-flex justify-content-between">
                        <p>{country}</p>
                        <p className="fw-bold text-info">${price}/night</p>
                    </span>

                    <span className="text-center">
                        <Button as={Link} to={`/book/${_id}`} variant="outline-info w-100" >Choose</Button>
                    </span>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Place;