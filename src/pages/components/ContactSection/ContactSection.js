
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import useMap from '../../../hooks/useMap';
import emailjs from 'emailjs-com';


const ContactSection = () => {
    const [mailNoti, setMailNoti] = useState('');
    const map = useMap(23.916566, 90.218745);
    const handleEmailSend = e => {
        e.preventDefault();
        emailjs.sendForm('service_y04nrih', 'template_0udyjmd', e.target, 'user_NjE14Xy3XM7XVtLOVvSgE')
            .then(res => {
                setMailNoti("email send successfull");
                e.target.reset();
            });
    }

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
                        <Form className="border p-3" onSubmit={handleEmailSend}>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" name="name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Your Message" name="message" />
                            </Form.Group>
                            <p>{mailNoti.length > 0 && "Email sent"}</p>
                            <Button variant="info" type="submit">Send Message</Button>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;