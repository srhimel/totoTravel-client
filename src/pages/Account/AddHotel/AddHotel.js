import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const AddHotel = () => {
    return (
        <div>
            <div className="pt-4 pb-5 bg-dark text-white text-center">
                <h2 className="display-1 fw-bold">
                    Add Hotel
                </h2>
            </div>
            <section>
                <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Hotel Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Hotel Name" />
                            <Form.Text className="text-muted d-none">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Hotel Picture</Form.Label>
                            <Form.Control type="url" placeholder="Enter Photo Url" />
                            <Form.Text className="text-muted d-none">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>House/Road</Form.Label>
                                    <Form.Control type="text" placeholder="House No/Road No" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="Location" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="text" placeholder="Latitude" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="text" placeholder="Longitude" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Facilities</Form.Label>
                            <Form.Check type="checkbox" label="Breakfast" />
                            <Form.Check type="checkbox" label=" Pets Allowed" />
                            <Form.Check type="checkbox" label="Bathtub" />
                            <Form.Check type="checkbox" label="Wifi Facility" />
                            <Form.Check type="checkbox" label="Car Parking" />
                            <Form.Check type="checkbox" label="Air Conditioning" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add your hotel
                        </Button>
                    </Form>
                </Container>
            </section>

        </div>
    );
};

export default AddHotel;