import React, { useState } from 'react';
import './Workout.css';

const Workouts = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const workoutPlans = {
    "Decrease Weight": [
      { text: "Push-Ups: 30 seconds", image: "Push-Ups.jpg" },
      { text: "Jumping Jacks: 1 minute", image: "Jumping Jacks.jpg" },
      { text: "Burpees: 3 sets of 15 reps", image: "Burpees.jpg" },
      { text: "High Knees: 3 sets of 30 seconds", image: "High Knees.jpg" },
      { text: "Plank with Shoulder Taps: 3 sets of 30 seconds", image: "Plank with Shoulder Taps.jpg" },
      // Add more exercises here
    ],
    "Muscle Gain ": [
      { text: "Bench Press: 3 sets of 10 reps", image: "Bench Press.jpg" },
      { text: "Squats: 3 sets of 10–12 reps", image: "Squats.jpg" },
      { text: "Pull-Ups or Lat Pulldown: 3 sets of 8–12 reps", image: "Pull-Ups.jpg" },
      { text: "Bicep Curls: 3 sets of 12–15 reps", image: "Bicep Curls.jpg" },
      { text: "Overhead Press: 3 sets of 10–12 reps", image: "Overhead Press.jpg" },
      // Add more exercises here
    ],
    "Maintain Fitness": [
      { text: "Running: 20 minutes", image: "Running.jpg" },
      { text: "Push-Ups: 3 sets of 15 reps", image: "Push-Ups.jpg" },
      { text: "Bodyweight Squats: 3 sets of 15 reps", image: "Bodyweight Squats.jpg" },
      { text: "Plank: 3 sets of 30–45 seconds", image: "Plank.jpg" },
      { text: "Plank: 1 minute", image: "Plank.jpg" },
      // Add more exercises here
    ],
    "Improve Endurance": [
      { text: "Cycling: 30 minutes", image:"Cycling.jpg " },
      { text: "Running: 20 minutes", image: "Running.jpg" },
      { text: "Swimming: 20 minutes", image: "Swimming.jpg" },
      { text: "Jump Rope: 3 sets of 2 minutes", image: "Jump Rope.jpg" },
      { text: "Interval Training (e.g., Sprint for 1 minute, walk for 2 minutes): 5 cycles", image: "Running.jpg" },
      // Add more exercises here
    ],
  };

  return (
    <div className="workouts-page">
      <div className='header'><h1>Workout Plans</h1></div>
      <div className="goal-selector">
        <div className='lable'><label>Select Your Goal:</label></div>
        <select
          value={selectedGoal}
          onChange={(e) => setSelectedGoal(e.target.value)}
          className="goaldropdown"
        >
          <option value="">Select a goal</option>
          <option value="Decrease Weight">Decrease Weight</option>
          <option value="Muscle Gain ">Build Muscle</option>
          <option value="Maintain Fitness">Maintain Fitness</option>
          <option value="Improve Endurance">Improve Endurance</option>
        </select>
      </div>

      {selectedGoal && (
        <div className="workout-plan-details">
          <h3>{selectedGoal} Plan</h3>
          <ul>
            {workoutPlans[selectedGoal].map((exercise, index) => (
              <li key={index} className="workout-item">
                <img src={exercise.image} alt={exercise.text} className="workout-image" />
                {exercise.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Workouts;