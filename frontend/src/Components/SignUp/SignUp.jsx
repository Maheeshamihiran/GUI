import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [mem_firstname, setFirstname] = useState('');
    const [mem_lastname, setLastname] = useState('');
    const [mem_email, setEmail] = useState('');
    const [mem_password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isChecked) {
            setError('You must agree to the User Agreement and Privacy Policy.');
            return;
        }

        try {
            const member = {
                first_name: mem_firstname,
                last_name: mem_lastname,
                email: mem_email,
                password: mem_password,
                goal: '',
                age: 0,
                weight: 0.0,
                height: 0.0,
            };

            const response = await axios.post('http://localhost:5000/api/signup', member);

            if (response.data.token) {
                setSuccess('Signup successful! Redirecting to login...');
                setError('');

                setTimeout(() => {
                    navigate('/home');
                }, 2000);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
            setSuccess('');
        }
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        setError('');
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-box">
                    <h1 className="signup-title">Sign Up</h1>

                    {success && <p className="success-message">{success}</p>}
                    {error && <p className="error-message">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="signup-input"
                            value={mem_firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="signup-input"
                            value={mem_lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="signup-input"
                            value={mem_email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="signup-input"
                            value={mem_password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className="signup-button"
                            type="submit"
                            disabled={!isChecked}
                        >
                            Sign-up
                        </button>
                    </form>

                    <div className="checkbox-section">
                        <label style={{ maxWidth: '300px', display: 'block' }}>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            I have read and agree to FITNEZZ’s User Agreement and Privacy Policy.
                        </label>
                        {isChecked && <p>Thank you for agreeing with our Policy!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;