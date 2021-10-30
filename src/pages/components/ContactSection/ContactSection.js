
import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import useMap from '../../../hooks/useMap';

const ContactSection = () => {
    const map = useMap(23.916566, 90.218745);
    return (
        <section>
            <Container>
                <div className="text-center">
                    <p className="h4">
                        Tell us your story
                    </p>
                    <h2 className="text-info">Get suggestion from our Experts</h2>
                </div>
                <Row className="mt-4 g-5" >
                    <Col md={6}>
                        {map}
                    </Col>
                    <Col md={6}>
                        <Form className="border p-3">
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                            </Form.Group>
                            <Button variant="info">Send Message</Button>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;