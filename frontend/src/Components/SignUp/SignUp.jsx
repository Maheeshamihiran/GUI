import React, { useState } from 'react';
import './SignUp.css';
import { addmember } from '../../../public/Service';

const SignUp = () => {
  // State to track checkbox
  const [isChecked, setIsChecked] = useState(false);
  const [mem_firstname,setfirstname]=useState('');
  const [mem_password,setpassword]=useState('');
  const [mem_lastname,setlastname]=useState('');
  const [mem_email,setemail]=useState('');

  



  async function handleclick(){
   
    //id, password, email, first_name, last_name, goal, age, weight, height
    // try{
        const member={password:mem_password,
            email:mem_email,
            first_name:mem_firstname,
            last_name:mem_lastname,
            goal:" ",
            age:0,
            weight:0.0,
            height:0.0
          }

        await addmember(member); 
        console.log(member.first_name)  
        console.log(member.last_name) 
        console.log(member.goal) 
    // }catch(error){
        // console.error(error);
    // }
    
   


  } 
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
                    <input type="text" placeholder="First Name" className="signup-input" value={mem_firstname} onChange={(e)=>setfirstname(e.target.value)} />
                    <input type="text" placeholder="Last Name" className="signup-input" value={mem_lastname} onChange={(e)=>setlastname(e.target.value)}/>
                    <input type="email" placeholder="Your Email" className="signup-input" value={mem_email} onChange={(e)=>setemail(e.target.value)} />
                    <input type="password" placeholder="Password" className="signup-input" value={mem_password} onChange={(e)=>setpassword(e.target.value)} />
                    <button className="signup-button" type="submit"  disabled={!isChecked} onClick={()=>handleclick()}>
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