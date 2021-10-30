import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="w-75 m-auto py-5 text-center">
            <img src="https://i.ibb.co/fxHFcfh/lost.png" alt="" className="w-25" />
            <p className="display-1">Are you lost?</p>
            <p className="text-info">404 - Page not found</p>
            <Button as={Link} to="/" variant="info">Go Back Home</Button>
        </div>
    );
};

export default NotFound;