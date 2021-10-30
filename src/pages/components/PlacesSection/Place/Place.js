import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = () => {
    return (
        <Col>
            <Card className="place">
                <div className="place-img">
                    <Card.Img variant="top" src="https://i.ibb.co/YhCmHpf/Rectangle-29.png" />
                </div>

                <Card.Body>
                    <Card.Title>Bali  </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <p>Indonetia</p>
                            <p className="fw-bold text-info">$250/night</p>
                        </div>
                    </Card.Text>
                    <div className="text-center">
                        <Button as={Link} to="/book/1" variant="outline-info w-100" >Choose</Button>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Place;