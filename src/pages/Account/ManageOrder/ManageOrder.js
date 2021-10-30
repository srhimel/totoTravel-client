import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    return (
        <div>
            <div className="pt-4 pb-5 bg-dark text-white text-center">
                <h2 className="display-1 fw-bold">
                    Manage Order
                </h2>
            </div>
            <section>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Booking By</th>
                                <th>Booking Place</th>
                                <th>Check in Date</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>@mdo</td>
                                <td><Link to="/book/1">Otto</Link></td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td><Button variant="success">Accept Order</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

            </section>
        </div>
    );
};

export default ManageOrder;