import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Achievement.css';

const Achievement = () => {
  const [waterIntake, setWaterIntake] = useState('');
  const [workoutPerformance, setWorkoutPerformance] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: ''
  });
  const [recommendedWaterIntake, setRecommendedWaterIntake] = useState('');

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const goal = params.get('goal');

    if (goal === 'Decrease Weight') {
      setRecommendedWaterIntake('2–3 liters');
    } else if (goal === 'Build Muscle') {
      setRecommendedWaterIntake('3–4 liters');
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Water Intake: ${waterIntake} liters`);
    console.log('Workout Performance:', workoutPerformance);
  };

  const handlePerformanceChange = (day, value) => {
    setWorkoutPerformance(prevState => ({
      ...prevState,
      [day]: value
    }));
  };

  return (
    <div className="achievement-container">
      <h1>Track Your Achievements</h1>
      <form onSubmit={handleSubmit} className="achievement-form">
        <div className="form-group">
          <label htmlFor="waterIntake">Water Intake (liters):</label>
          <input
            type="number"
            id="waterIntake"
            name="waterIntake"
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
            required
          />
          <div className="water-goal">
            <p>Recommended Water Intake: {recommendedWaterIntake}</p>
          </div>
        </div>
        <div className="form-group">
          <label>Workout Performance:</label>
          {Object.keys(workoutPerformance).map(day => (
            <div key={day} className="day-performance">
              <label htmlFor={day}>{day}:</label>
              <select
                id={day}
                name={day}
                value={workoutPerformance[day]}
                onChange={(e) => handlePerformanceChange(day, e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="good">Good</option>
                <option value="bad">Bad</option>
              </select>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Achievement;