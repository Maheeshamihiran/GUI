import React from 'react';
import { Link } from 'react-router-dom';
import './Achievement.css';

function Achievement() {
  return (
    <div className="achievement-page">
      <div className="achievement-list">
      <h1 className="section-title">Track Achievements</h1>
      <div className="achievement-list">
        <Link to="/work-routinet" className="achievement-item">
          <img src="path/to/your/work-routine.jpg" alt="Work Routine" />
          <h2>Work Routine</h2>
          <p>Track your daily workout routines.</p>
        </Link>
        <Link to="/calarie-intake" className="achievement-item">
          <img src="path/to/your/calorie-intake.jpg" alt="Calorie Intake" />
          <h2>Calorie Intake</h2>
          <p>Monitor your daily calorie intake.</p>
        </Link>
        <Link to="/progress-monitoring" className="achievement-item">
          <img src="path/to/your/progress-monitoring.jpg" alt="Progress Monitoring" />
          <h2>Progress Monitoring</h2>
          <p>Keep track of your fitness progress.</p>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Achievement;