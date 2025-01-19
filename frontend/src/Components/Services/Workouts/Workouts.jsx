import React, { useState } from 'react';
import './Workout.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Workouts = () => {
  const [selectedGoal, setSelectedGoal] = useState('Decrease Weight');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => { setDate(newDate); };

  const workoutPlans = {
    "Decrease Weight": [
      { day: "Monday", title: "Cardio", exercises: [
        { text: "30-40 minutes of moderate-intensity cardio (running, cycling, or swimming)", image: "Running.jpg" }
      ]},
      { day: "Tuesday", title: "Full Body Strength", exercises: [
        { text: "3 sets of 12-15 squats", image: "Squats.jpg" },
        { text: "3 sets of 12-15 push-ups", image: "Push-Ups.jpg" },
        { text: "3 sets of 12-15 lunges (each leg)", image: "lunges.jpg" },
        { text: "3 sets of 12-15 dumbbell rows", image: "dumbbell rows.png" }
      ]},
      { day: "Wednesday", title: "HIIT (High-Intensity Interval Training)", exercises: [
        { text: "20 minutes of HIIT (e.g., 30 seconds sprint, 30 seconds walk/jog, repeat)", image: ", walk.png" }
      ]},
      { day: "Thursday", title: "Core and Flexibility", exercises: [
        { text: "3 sets of 20 bicycle crunches", image: "bicycle crunche.jpg" },
        { text: "3 sets of 15 leg raises", image: "leg raises.jpg" },
        { text: "3 sets of 60 seconds plank", image: "seconds plank.jpg" },
        { text: "20 minutes of yoga or stretching", image: "yoga or stretching.jpg" }
      ]},
      { day: "Friday", title: "Cardio", exercises: [
        { text: "30-40 minutes of moderate-intensity cardio (running, cycling, or swimming)", image: "Cycling.jpg" }
      ]},
      { day: "Saturday", title: "Full Body Strength", exercises: [
        { text: "3 sets of 12-15 deadlifts", image: "deadlifts.png" },
        { text: "3 sets of 12-15 shoulder press", image: "shoulder press.jpg" },
        { text: "3 sets of 12-15 bicep curls", image: "Bicep Curls.jpg" },
        { text: "3 sets of 12-15 tricep dips", image: "tricep dips.jpg" }
      ]},
      { day: "Sunday", title: "Rest or Active Recovery", exercises: [
        { text: "Light activity like walking, yoga, or stretching", image: "yoga.jpg" }
      ]}
    ],
    "Muscle Gain": [
      { day: "Monday", title: "Upper Body Strength", exercises: [
        { text: "3 sets of 8-12 bench press", image: "Bench Press.jpg" },
        { text: "3 sets of 8-12 dumbbell shoulder press", image: "dumbbell shoulder press.jpg" },
        { text: "3 sets of 8-12 bicep curls", image: "Bicep Curls.jpg" },
        { text: "3 sets of 8-12 tricep dips", image: "tricep dips.jpg" }
      ]},
      { day: "Tuesday", title: "Lower Body Strength", exercises: [
        { text: "3 sets of 8-12 squats", image: "Squats.jpg" },
        { text: "3 sets of 8-12 deadlifts", image: "deadlifts.png" },
        { text: "3 sets of 8-12 lunges (each leg)", image: "lunges.jpg" },
        { text: "3 sets of 8-12 calf raises", image: "calf raises.jpg" }
      ]},
      { day: "Wednesday", title: "Rest or Active Recovery", exercises: [
        { text: "Light activity like walking, yoga, or stretching", image: ", walk.png" }
      ]},
      { day: "Thursday", title: "Back and Core Strength", exercises: [
        { text: "3 sets of 8-12 pull-ups or lat pull-downs", image: "Pull-Ups.jpg" },
        { text: "3 sets of 8-12 dumbbell rows", image: "dumbbell rows.png" },
        { text: "3 sets of 20 bicycle crunches", image: "bicycle crunche.jpg" },
        { text: "3 sets of 60 seconds plank", image: "seconds plank.jpg" }
      ]},
      { day: "Friday", title: "Full Body Strength", exercises: [
        { text: "3 sets of 8-12 bench press", image: "Bench Press.jpg" },
        { text: "3 sets of 8-12 squats", image: "Squats.jpg" },
        { text: "3 sets of 8-12 deadlifts", image: "deadlifts.png" },
        { text: "3 sets of 8-12 shoulder press", image: "shoulder press.jpg" }
      ]},
      { day: "Saturday", title: "Active Recovery", exercises: [
        { text: "Light activity like walking or stretching", image: "stretchin.png" }
      ]},
      { day: "Sunday", title: "Rest", exercises: [
        { text: "Light activity like walking, yoga, or stretching", image: ", walk.png" }
      ]}
    ],
    "Maintain Fitness": [
      { day: "Monday", title: "Cardio and Core", exercises: [
        { text: "30 minutes of moderate-intensity cardio", image: "Jumping Jacks.jpg" },
        { text: "3 sets of 15-20 crunches", image: "crunches.jpg" },
        { text: "3 sets of 10-15 leg raises", image: "leg raises.jpg" },
        { text: "3 sets of 60 seconds plank", image: "seconds plank.jpg" }
      ]},
      { day: "Tuesday", title: "Upper Body Strength", exercises: [
        { text: "3 sets of 10-12 push-ups", image: "Push-Ups.jpg" },
        { text: "3 sets of 10-12 dumbbell shoulder press", image: "dumbbell shoulder press.jpg" },
        { text: "3 sets of 10-12 bicep curls", image: "Bicep Curls.jpg" },
        { text: "3 sets of 10-12 tricep dips", image: "tricep dips.png" }
      ]},
      { day: "Wednesday", title: "Rest or Active Recovery", exercises: [
        { text: "Light activity like walking, yoga, or stretching", image: "yoga or stretching.jpg" }
      ]},
      { day: "Thursday", title: "Lower Body Strength", exercises: [
        { text: "3 sets of 10-12 squats", image: "Squats.jpg" },
        { text: "3 sets of 10-12 lunges (each leg)", image: "lunges.jpg" },
        { text: "3 sets of 10-12 calf raises", image: "calf raisess.jpg" },
        { text: "3 sets of 10-12 deadlifts", image: "deadlifts.png" }
      ]},
      { day: "Friday", title: "Cardio and Flexibility", exercises: [
        { text: "30 minutes of moderate-intensity cardio", image: "" },
        { text: "20 minutes of yoga or stretching", image: "moderate- moderate-intensity cardio.jpg" }
      ]},
      { day: "Saturday", title: "Full Body Strength", exercises: [
        { text: "3 sets of 10-12 push-ups", image: "Push-Ups.jpg" },
        { text: "3 sets of 10-12 squats", image: "Squats.jpg" },
        { text: "3 sets of 10-12 dumbbell rows", image: "dumbbell rows.png" },
        { text: "3 sets of 10-12 shoulder press", image: "shoulder press.jpg" }
      ]},
      { day: "Sunday", title: "Rest or Active Recovery", exercises: [
        { text: "Light activity like walking, yoga, or stretching", image: ", walk.png" }
      ]}
    ],
    "Improve Endurance": [
      { day: "Monday", title: "Long-Distance Cardio", exercises: [
        { text: "45-60 minutes of steady-state cardio (running, cycling, or swimming)", image: "swimming.jpg" }
      ]},
      { day: "Tuesday", title: "Strength and Endurance", exercises: [
        { text: "3 sets of 15-20 push-ups", image: "Push-Ups.jpg" },
        { text: "3 sets of 15-20 squats", image: "Squats.jpg" },
        { text: "3 sets of 15-20 lunges (each leg)", image: "lunges.jpg" },
        { text: "3 sets of 15-20 dumbbell rows", image: "dumbbell rows.png" }
      ]},
      { day: "Wednesday", title: "Interval Training", exercises: [
        { text: "30 minutes of interval training (e.g., 3 minutes fast pace, 2 minutes easy pace, repeat)", image: "fast pace.jpg" }
      ]},
      { day: "Thursday", title: "Core and Flexibility", exercises: [
        { text: "3 sets of 20 bicycle crunches", image: "bicycle crunche.jpg" },
        { text: "3 sets of 15 leg raises", image: "leg raises.jpg" },
        { text: "3 sets of 60 seconds plank", image: "leg raises.jpg" },
        { text: "20 minutes of yoga or stretching", image: "yoga.jpg" }
      ]},
      { day: "Friday", title: "Long-Distance Cardio", exercises: [
        { text: "45-60 minutes of steady-state cardio (running, cycling, or swimming)", image: "Cycling.jpg" }
      ]},
      { day: "Saturday", title: "Strength and Endurance", exercises: [
        { text: "3 sets of 15-20 deadlifts", image: "deadlifts.png" },
        { text: "3 sets of 15-20 shoulder press", image: "shoulder press.jpg" },
        { text: "3 sets of 15-20 bicep curls", image: "Bicep Curls.jpg" },
        { text: "3 sets of 15-20 tricep dips", image: "tricep dips.jpg" }
      ]},
      { day: "Sunday", title: "Rest or Active Recovery", exercises: [
        { text: "Light activity like walking, yoga, or stretching", image: "yoga.jpg" }
      ]}
    ],
  };

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="workouts-page">
      <div className="workouts-container">
        <h1>Workouts</h1>
        <h2>--Week 1-6 Workout Plan--</h2>
        <div className="goal-selector">
          <label htmlFor="goal">Select a Goal:</label>
          <select id="goal" value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)}>
            {Object.keys(workoutPlans).map((goal) => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>
        </div>
        <div className="day-selector">
          <label htmlFor="day">Select a Day:</label>
          <select id="day" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>
        <div className="calendar-container-2">
          <Calendar onChange={onChange} value={date} />
         
        </div>
        {selectedGoal && selectedDay && (
          <div className="workout-plan">
            {workoutPlans[selectedGoal].filter(exercise => exercise.day === selectedDay).map((exercise, index) => (
              <div key={index} className="workout-day">
                <h2>{exercise.day}</h2>
                <h3>{exercise.title}</h3>
                <p>----------------------------------------------</p>
                {exercise.exercises.map((ex, idx) => (
                  <div key={idx} className="exercise">
                    <img src={ex.image} alt={ex.text} className="exercise-image" />
                    <p className="exercise-text" dangerouslySetInnerHTML={{ __html: ex.text }}></p>
                    
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

<h3>Tips for Success:</h3>
<p><strong>Warm-Up:</strong>Always start with a 5-10 minute warm-up to prepare your muscles and prevent injuries.</p>
<p><strong>Listen to Your Body:</strong>  If  you feel pain (other than normal muscle soreness), stop the exercises  .</p>
      </div>
    </div>
  );
};

export default Workouts;