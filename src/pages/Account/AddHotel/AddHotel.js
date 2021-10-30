import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddHotel = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/hotels', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('data posted');
                    reset();
                };
            })
    };
    return (
        <div>
            <div className="pt-4 pb-5 bg-dark text-white text-center">
                <h2 className="display-1 fw-bold">
                    Add Hotel
                </h2>
            </div>
            <section>
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Hotel Name</Form.Label>
                            <Form.Control {...register("name", { required: true })} type="text" placeholder="Enter Hotel Name" />
                            <Form.Text className="text-danger">
                                {errors.name && <span>This field is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Hotel Picture</Form.Label>
                            <Form.Control {...register("picture", { required: true })} type="url" placeholder="Enter Photo Url" />
                            <Form.Text className="text-danger">
                                {errors.picture && <span>This field is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price Per Night</Form.Label>
                            <Form.Control {...register("price", { required: true })} type="number" placeholder="Price/Night" />
                            <Form.Text className="text-danger">
                                {errors.picture && <span>This field is required</span>}
                            </Form.Text>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>House/Road</Form.Label>
                                    <Form.Control {...register("house", { required: true })} type="text" placeholder="House No/Road No" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control {...register("location", { required: true })} type="text" placeholder="Location" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control {...register("city", { required: true })} type="text" placeholder="City" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control {...register("country", { required: true })} type="text" placeholder="Country" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control {...register("lat", { required: true })} type="text" placeholder="Latitude" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control {...register("lon", { required: true })} type="text" placeholder="Longitude" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Facilities</Form.Label>
                            <Form.Check {...register("breakfast")} type="checkbox" label="Breakfast" />
                            <Form.Check {...register("pet")} type="checkbox" label=" Pets Allowed" />
                            <Form.Check {...register("bathtub")} type="checkbox" label="Bathtub" />
                            <Form.Check {...register("wifi")} type="checkbox" label="Wifi Facility" />
                            <Form.Check {...register("car")} type="checkbox" label="Car Parking" />
                            <Form.Check {...register("air")} type="checkbox" label="Air Conditioning" />
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