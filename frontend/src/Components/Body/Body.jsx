import React from 'react';

import './Body.css';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div className="HomePage">
  
      <header className="HomePage-header">
        <div className="content" /*"background: linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)), url('images (1) (1).png');"*/>
          <h1>JOIN FITNEZZ TODAY</h1>
          <p>
            Stay Committed, Stay Strong, And Watch Yourself Grow. Our App Is Designed To Help You Track Your Progress, Reach Your Goals, And Push Your Limits. Whether You're Just Starting Out Or You're A Seasoned Athlete, Every Step You Take Brings You Closer To Your Best Self. Get Inspired, Stay Motivated, And Make Each Workout Count. Your Fitness Journey Starts Here—Let's Crush It Together!
          </p>
          <div className="buttons">
          <Link to="/services" className="btn">Get Start</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Body;
