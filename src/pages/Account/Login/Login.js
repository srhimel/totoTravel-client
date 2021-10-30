import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { googleSignIn, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const rediUrl = location.state?.from || '/';
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                history.push(rediUrl);
            })
            .catch(error => setError(error.message))
    }
    return (
        <div>
            <div className="pt-4 pb-5 bg-dark text-white text-center">
                <h2 className="display-1 fw-bold">
                    Login
                </h2>
            </div>
            <section>
                <div className="login-box py-5">
                    <Button variant="outline-dark px-5" onClick={handleGoogleLogin}> <FcGoogle /> Login With Google</Button>
                </div>
            </section>
        </div>
    );
};

export default Login;