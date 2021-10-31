import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero text-white">
            <Container>
                <h1 className="display-2">
                    Find the <span className="text-info fw-bold">Best Places</span>  to Be
                </h1>
                <h2 className="display-6">Explore top-rated attractions, activities and more!</h2>
                <div className="hero-button d-flex gap-2 justify-content-center mt-5">
                    <Button variant="info" as={Link} to="/add-listing"> Add Listing</Button>
                    <Button variant="light" as={Link} to="/places"> Explore More</Button>
                </div>

            </Container>
        </div>
    );
};

export default Hero;