
import React from 'react';
import { Col, Container, Row, Button, Carousel } from 'react-bootstrap';

const AboutSection = () => {
    return (
        <section>
            <Container>
                <Row className="align-items-center g-5">
                    <Col xs={12} md={6}>
                        <div className="about-info">
                            <p className="h4">
                                Amazing Places To Enjony Your Travel
                            </p>
                            <h2 className="text-info">About Our ToTo Travel</h2>
                            <p>ToTo Travel is one of the largest travel agency which started since 1910 in Bangladesh. It is highly recomanded to visit our office before you want to leave for a vacation. Our travel agent will find the best place for you so that you don't have to. </p>
                            <p className="mb-4">Tired of searching places for your honeymoon trip. Don't worry we have some special places for you too with amazing deals and discounts.</p>

                            <Button variant="info" > Search Now</Button>

                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="about-slider">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/SB76wjY/b2.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/Dg9VJ40/b1.jpg"
                                        alt="Second slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/R6s2Gmp/b3.jpg"
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default AboutSection;