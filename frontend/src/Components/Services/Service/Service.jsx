import React from 'react';
import './Service.css';

import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className="service-page">
      <div className="service-container">
        <h1 className="service-title">Our Services</h1>
        <p className="service-description">
          At FITNEZZ, we offer a wide range of services to help you achieve your fitness goals. Whether you're looking for personal training, group classes, or nutritional advice, we have something for everyone.
        </p>
        <div className="service-list">
           <Link to="/registration" className="registration-link">
            <div className="service-item"> 
            <h2>Register Member</h2>
            <p>Get one-on-one training sessions with our certified trainers to help you reach your fitness goals.</p>
          </div> </Link>
          {/* <div className="service-item">
            <h2>Reserve Equipment</h2>
            <p>Join our group classes for a fun and motivating workout experience.</p>
          </div> */}
          < Link to="/nutritional" className="nutritional-link">
          <div className="service-items">
            <h2>Nutritional Advice</h2>
            <p>Receive personalized nutritional advice to complement your fitness routine.</p>
          </div> </Link>
          < Link to="/workouts" className="workouts-link">
          <div className="service-item">
            <h2>Workout Plans</h2>
            <p>Receive personalized nutritional advice to complement your fitness routine.</p>
          </div></Link>

        </div>
        
      </div>
    </div>
  );
}

export default Service;