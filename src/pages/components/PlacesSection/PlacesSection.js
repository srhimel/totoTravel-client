import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Place from './Place/Place';

const PlacesSection = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/hotels')
            .then(result => setPlaces(result.data));
    }, [])
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
                    {places.map(place => <Place key={place._id} place={place} />)}
                </Row>
            </Container>

        </section>
    );
};

export default PlacesSection;