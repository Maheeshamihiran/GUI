import React, { useState } from 'react';
// Import the CSS file
import './WorkRoutine.css';

const WorkRoutine = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddExercise = () => {
    if (exerciseName) {
      setExercises([
        ...exercises,
        {
          id: Date.now(),
          name: exerciseName,
          sets: sets,
          reps: reps,
          duration: duration
        }
      ]);
      // Reset form fields
      setExerciseName('');
      setSets('');
      setReps('');
      setDuration('');
    }
  };

  const handleRemoveExercise = (id) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  return (
    <div className="workout-container">
      <h1 className="workout-title">1. Workout Routine</h1>
      
      <div className="form-group">
        <label className="form-label">Exercise Name:</label>
        <input
          type="text"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Sets:</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Duration (minutes):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="form-input"
        />
      </div>
      
      <button
        onClick={handleAddExercise}
        className="add-button"
      >
        Add Exercise
      </button>
      
      <div>
        <h2 className="exercise-list-title">Exercise List</h2>
        {exercises.length === 0 ? (
          <p className="no-exercises">No exercises added yet.</p>
        ) : (
          <ul className="exercise-list">
            {exercises.map((exercise) => (
              <li key={exercise.id} className="exercise-item">
                <div className="exercise-details">
                  <div className="exercise-name">{exercise.name}</div>
                  <div className="exercise-metadata">
                    {exercise.sets && <span>Sets: {exercise.sets} | </span>}
                    {exercise.reps && <span>Reps: {exercise.reps} | </span>}
                    {exercise.duration && <span>Duration: {exercise.duration} min</span>}
                  </div>
                </div>
                <button 
                  onClick={() => handleRemoveExercise(exercise.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WorkRoutine;