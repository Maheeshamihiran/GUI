
import { useState } from 'react'
import './LoginCard.css'
import { Link } from 'react-router-dom';
export default function LoginCard(){
  
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');


    console.log(username);
    console.log(password);

    // async function handleclick(){
    //   try{
    //     const response = await axios.post('http://localhost:3001/login',{username,password});
    //     if(response.data.success){
    //       alert('login successful');
    //   }
    // }

   return(
    <div>
       <div className="login-box">
          <h1 className="login-title">Login Here</h1>
          
          <form>
            <input type="email"   placeholder="Your Email" className="login-input" onChange={(e)=>setusername(e.target.value)}/>
            <input type="password" placeholder="Password" className="login-input" onChange={(e)=>setpassword(e.target.value)}

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