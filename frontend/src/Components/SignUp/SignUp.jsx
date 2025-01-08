import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  // State to track checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

return (
    <div className="signup-page">
        <div className="signup-container">
            <div className="signup-box">
                <h1 className="signup-title">Sign Up</h1>
                <form>
                    <input type="text" placeholder="First Name" className="signup-input" />
                    <input type="text" placeholder="Last Name" className="signup-input" />
                    <input type="email" placeholder="Your Email" className="signup-input" />
                    <input type="password" placeholder="Password" className="signup-input" />
                    <button className="signup-button" type="submit"  disabled={!isChecked}>
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