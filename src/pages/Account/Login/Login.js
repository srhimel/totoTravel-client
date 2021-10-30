import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div className="pt-4 pb-5 bg-dark text-white text-center">
                <h2 className="display-1 fw-bold">
                    Login
                </h2>
            </div>
            <section>
                <div className="login-box py-5">
                    <Button variant="outline-dark px-5"> <FcGoogle /> Login With Google</Button>
                </div>
            </section>
        </div>
    );
};

export default Login;