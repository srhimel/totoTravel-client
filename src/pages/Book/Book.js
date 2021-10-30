import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { HiLocationMarker, HiWifi } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import { BsSnow } from "react-icons/bs";
import { MdOutlineEmojiFoodBeverage, MdPets, MdOutlineBathtub } from "react-icons/md";
import useMap from '../../hooks/useMap';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Book = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const { id } = useParams();
    const history = useHistory();
    const [place, setPlace] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/hotels/${id}`)
            .then(res => setPlace(res.data));
    }, [id]);

    const { name, picture, lon, lat, house, location, city, country, breakfast, pet, bathtub, wifi, car, air, price, _id } = place;
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        setValue("price", price);
        setValue("place_id", _id);
        setValue("place", name);
    });
    const onSubmit = data => {
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('data posted');
                    history.push('/my-order');
                };
            })
    };
    const map = useMap(parseFloat(lat), parseFloat(lon));

    return (
        <section>
            <Container>
                <Row className="g-5">
                    <Col md={7}>

                        <div className="book-info">
                            <h2>{name} </h2>
                            <p><HiLocationMarker /> &nbsp; {house + ' , ' + location + ' , ' + city + ' , ' + country}</p>
                            <img src={picture} alt="" className="w-100" />
                            <div className="book-offer mt-3">
                                <h4>What this place offers</h4>
                                <Row>
                                    <Col>
                                        <ul className="p-0" style={{ listStyle: 'none' }}>

                                            {breakfast && <li>
                                                <MdOutlineEmojiFoodBeverage></MdOutlineEmojiFoodBeverage> Breakfast
                                            </li>}
                                            {pet && <li>
                                                <MdPets></MdPets> Pets Allowed
                                            </li>}
                                            {bathtub && <li>
                                                <MdOutlineBathtub></MdOutlineBathtub> Bathtub
                                            </li>}
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul className="p-0" style={{ listStyle: 'none' }}>
                                            {wifi && <li>
                                                <HiWifi> </HiWifi> Wifi Facility
                                            </li>}
                                            {car && <li>
                                                <AiFillCar></AiFillCar> Car Parking
                                            </li>}
                                            {air && <li>
                                                <BsSnow></BsSnow> Air Conditioning
                                            </li>}

                                        </ul></Col>
                                </Row>


                            </div>

                            <div className="mt-3">
                                <h4>Location on Google Map</h4>
                                {map}
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>

                        <div className="book-form border p-4">
                            <h4 className="mt-0 mb-3">Complete Booking </h4>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Control type="hidden" {...register("place_id")} />
                                <Form.Control type="hidden" {...register("price")} />
                                <Form.Control type="hidden" {...register("place")} />
                                <Form.Control type="hidden" {...register("status")} defaultValue="pending" />
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control {...register("name")} type="text" placeholder="Full Name" defaultValue={displayName} />

                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control {...register("email")} type="email" placeholder="Enter email" defaultValue={email} />
                                            <Form.Text className="text-muted d-none">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control {...register("phone")} type="name" placeholder="Phone Number" required />
                                        </Form.Group>
                                    </Col>
                                </Row>



                                <Row>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Check In</Form.Label>
                                            <Form.Control type="date" {...register("checkIn")} required />
                                        </Form.Group></Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Check Out</Form.Label>
                                            <Form.Control type="date" {...register("checkOut")} required />
                                        </Form.Group></Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Number Of People</Form.Label>
                                    <Form.Control {...register("people")} type="number" placeholder="Number of People" required />
                                </Form.Group>


                                <Button variant="info" type="submit">
                                    Book Now

                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Book;