import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import React from 'react';
import './Login.css'
import LoginCard from './LoginCard';



function Login() {

    //  const [value, setValue] = useState(new Date());
   
  return (
    <div className="login-page">
      <div className="login-container">
       <LoginCard/>
       {/* <div className='calender_container'>
       <Calendar onChange={setValue} value={value} /> 
       </div>
       */}
      </div>
    </div>
  );
}

export default Login;