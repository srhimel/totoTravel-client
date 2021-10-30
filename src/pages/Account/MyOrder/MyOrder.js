import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`https://tototravel.herokuapp.com/my-order/${user?.email}`)
            .then(res => setOrders(res.data));
    }, [user]);
    const handleDelete = id => {
        const confirm = window.confirm("Are your sure you want to delete ?");
        if (confirm) {
            axios.delete(`https://tototravel.herokuapp.com/orders/${id}`)
                .then(res => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }

    return (
        <div>
            <div className="pt-4 pb-5 bg-dark text-white text-center">
                <h2 className="display-1 fw-bold">
                    My Order
                </h2>
            </div>
            <section>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Price</th>
                                <th>Check in Date</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => <tr key={order._id}>
                                <td><Link to={'/book/' + order.place_id}>{order.place}</Link></td>
                                <td>${order.price}</td>
                                <td>{order.checkIn}</td>
                                <td>{order.status}</td>
                                <td><Button variant="danger" onClick={() => handleDelete(order._id)}>Cancel Order</Button></td>
                            </tr>)}
                        </tbody>
                    </Table>
                </Container>

            </section>
        </div>
    );
};

export default MyOrder;