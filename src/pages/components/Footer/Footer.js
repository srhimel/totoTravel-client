import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../logo.svg';
const Footer = () => {
    return (
        <footer className="bg-dark text-white ">
            <Container>
                <div className="footer-top pt-5 pb-3">
                    <Row>
                        <Col md={3}>
                            <img src={logo} alt="" />

                            <p>ToTo Travel is one of the largest travel agency which started since 1910 in Bangladesh. It is highly recomanded to visit our office before you want to leave for a vacation.</p>
                        </Col>
                        <Col md={3}>
                            <p className="h5">Quick Link</p>
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                                <li>Search</li>
                                <li>Book</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <p className="h5">Services</p>
                            <ul>
                                <li>Travel Planner</li>
                                <li>Honeymoon Planner</li>
                                <li>Visa & Passport</li>
                                <li>Travel Agent</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <p className="h5">Privacy Policy</p>
                            <ul>
                                <li>Terms & Condition</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                                <li>Contact Us</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <div className="footer-bottom text-center border-top py-2">
                    <p>All Right Reserved &copy; 2020-2022 - ToTo Travel</p>
                </div>

            </Container>
        </footer>
    );
};

export default Footer;