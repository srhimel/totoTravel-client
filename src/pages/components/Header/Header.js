import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../../logo.svg';
import { BsPersonCircle } from "react-icons/bs";
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link exact as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/places">Places</Nav.Link>
                        <Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
                        <NavDropdown title={<span><BsPersonCircle /> &nbsp; Account </span>} align="end" id="account-drop">

                            <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/my-order">My Order</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/all-orders">All Order</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/add-listing">Add Listing</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;