import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Place from './Place/Place';

const PlacesSection = () => {
    return (
        <section>
            <Container>
                <div className="text-center">
                    <p className="h4">
                        Life is short, Make it amazing
                    </p>
                    <h2 className="text-info">Book your favorite spot</h2>
                </div>
                <Row xs={12} md={4} className="g-4 mt-4">

                    <Place />
                    <Place />
                    <Place />
                    <Place />
                    <Place />
                    <Place />
                    <Place />
                    <Place />


                </Row>
            </Container>

        </section>
    );
};

export default PlacesSection;