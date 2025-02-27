
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './RegistrationForm.css'; // Import the custom CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'choose',
    dateOfBirth: '',
    fitnessGoal: '',
    medicalConditions: '',
    weight:'',
    height:'',
    fitnessLevel: 'Beginner',
    membershipType: 'Free Trial',
    startDate: '',
    preferredTrainer: '',
    
  });
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => { setDate(newDate); };
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add logic to send data to the backend or API
  };
  
  
    // Handle checkbox change
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

  return (
    <div className="registration-form-container">
     <div className='member'> <h2>Member Registration Form</h2></div>
      <form onSubmit={handleSubmit}>
      {/* Personal Details */}
      <div className="form-group">
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}required />
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input type="text" name="age" value={formData.age} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <select  name="geder" value={formData.gender} onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        
        </select>
      </div>

      <div className="form-group">
        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth"  value={formData.dateOfBirth} onChange={handleChange} required/>
      </div>

      {/* Health Information */}
      <div className="form-group">
        <label>Fitness Goals:</label>
        <input type="text" name="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange}/>
      </div>

      <div className="form-group">
        <label>Medical Conditions (optional):</label>
        <input
        type="text"
        name="medicalConditions"
        value={formData.medicalConditions}
        onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Height:</label>
        <input type="text" name="height"value={formData.height} onChange={handleChange}required/>
      </div>
       <div className="form-group">
        <label>Weight:</label>
        <input type="text" name="weight" value={formData.weight} onChange={handleChange} required/>
      </div>
      

      <div className="form-group">
        <label>Current Fitness Level:</label>
        <select name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Membership Details */}
      <div className="form-group">
        <label>Membership Type:</label>
        <select name="membershipType" value={formData.membershipType}onChange={handleChange}>
          
        <option value="Monthly">Monthly</option>
        <option value="Three Month"> Three Monthly</option>
        <option value="Annual">Annual</option>
        </select>
      </div>

      <div className="form-group">
        <label>Start Date:</label>
        <input type="date"  name="startDate" value={formData.startDate}  onChange={handleChange} required/>
      </div>

      <div className="form-group">
        <label>Preferred Trainer (optional):</label>
        <input type="text" name="preferredTrainer" value={formData.preferredTrainer} onChange={handleChange} />
      </div>
       
      <div className="button-container" >
        <button  className="sub" type="submit">Register</button>
        <div className="checkbox-section">
                    <label >
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
      </form>
      <div className='calender-container'>
      <Calendar onChange={onChange} value={date} />
       <p>Slected Date: {date.toDateString()}</p>
       </div>
       
    </div>
    
    );
};

export default RegistrationForm;
