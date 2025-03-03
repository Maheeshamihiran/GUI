import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 function SignUp()  {
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    
     // State to track first name
  // State to track checkbox

    const handeSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup', {firstname, lastname, email, password})
        .then(result => console.log(result))
        .then(() => navigate('/'))
        .then(() => alert("Sign-up successful"))
        .catch(err => console.log(err))
          
        }
        
       
    
  

return (
    <div className="signup-page">
        <div className="signup-container">
            <div className="signup-box">
                <h1 className="signup-title">Sign Up</h1>
                <form onSubmit={handeSubmit}>
                    <input type="text" placeholder="First Name" className="signup-input" name="email " onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" className="signup-input" name ="email" onChange={(e) => setLastName(e.target.value)}/>
                    <input type="email" placeholder="Your Email" className="signup-input" name ="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="signup-input" name ="email" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="signup-button" type="submit"  >
                        Sign-up
                    </button>
                </form>
                
            </div>
        </div>
    </div>
);
};

export default SignUp;