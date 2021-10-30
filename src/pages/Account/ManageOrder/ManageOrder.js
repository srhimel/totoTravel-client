import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [updated, setUpdated] = useState(false);
    useEffect(() => {
        axios.get(`https://tototravel.herokuapp.com/orders`)
            .then(res => setOrders(res.data));
    }, [updated]);
    const handleUpdate = id => {
        const confirm = window.confirm("Are your sure you want to accept order ?");
        if (confirm) {
            axios.put(`https://tototravel.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        alert("updated");
                        setUpdated(true);
                    };
                })
        }
    }
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
                            {orders.map(order => <tr key={order._id}>
                                <td>{order.name}</td>
                                <td><Link to={'/book/' + order.place_id}>{order.place}</Link></td>
                                <td>{order.checkIn}</td>
                                <td>{order.status}</td>
                                <td>{order.status === 'pending' && <Button variant="success" onClick={() => handleUpdate(order._id)}>Accept Order</Button>}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                </Container>

            </section>
        </div>
    );
};

export default ManageOrder;