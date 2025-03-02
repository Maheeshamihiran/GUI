import React, { useState } from 'react';
import './LoginCard.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                email,
                password,
            });

            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('/home');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid email or password.');
        }
    };

    return (
        <div>
            <div className="login-box">
                <h1 className="login-title">Login Here</h1>

                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="loginbutton">
                        Login
                    </button>
                </form>

                <p className="signup-text">
                    Don't have an account?<br />{' '}
                    <Link to="/signup" className="signup-link">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
}