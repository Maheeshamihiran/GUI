
import { useState } from 'react'
import './LoginCard.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginCard(){
  
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const navigate = useNavigate();
    const handleSubmit =  (e) => {
        e.preventDefault();
       axios.post('http://localhost:5000/login', {email, password})
        .then(result => {
            console.log(result)
          if(result.data === "Login successful"){
               navigate('/home')
               
           }


       })
        .catch(err => console.log(err))

       
   }


 
   return(
    <div>
       <div className="login-box">
          <h1 className="login-title">Login Here</h1>
          
          <form  onSubmit={handleSubmit}>
          <input type="email" placeholder="Your Email" className="login-input" name ="email" onChange={(e) => setEmail(e.target.value)} />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              name="email"
              onChange={(e)=>setPassword(e.target.value)}

            />
            <button type="submit" className="loginbutton">
              Login
            </button>
          </form>
          <p className="signup-text">
            Don't have an account?<br></br> <Link to="/signup" className="signup-link">Sign up here</Link>
          </p>
          
        </div>
    </div>
   )
}