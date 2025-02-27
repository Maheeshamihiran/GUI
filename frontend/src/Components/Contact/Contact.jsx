import { useState } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';
 function Contact(){
  
    const [email,setemail]=useState('');
    const [massage,setmassage]=useState('');

    console.log(email);
    console.log(massage);

   return(
    <div>
      <div className="contact-page">
       <div className="login-box">
          <h2 className="login-title">CONTACT</h2>
         <div className='mail'><p><strong>Email:</strong>www.finezz@.com</p></div>
          <div className='mail'><p><strong>Tele:</strong>+9441-2428575</p></div>

          <form>
            <input type="email"   placeholder="Your Email" className="login-input-1" onChange={(e)=>setemail(e.target.value)}/>
            <input type="text-box" placeholder="Your massege" className="login-input-2" onChange={(e)=>setmassage(e.target.value)}

            />
            <button type="submit" className="loginbutton">
              Send
            </button>
          </form>
          
          
        </div>
        </div>
    </div>
   )
}
export default Contact;