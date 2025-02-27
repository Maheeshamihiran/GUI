import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">FITNEZZ</h2>
        <nav>
          <ul className="nav-table">
            <li><Link to="/services">Dashboard</Link></li>
            <li><Link to="/home">Site Home</Link></li>
            <li><Link to="/registration">Join Our Gym</Link></li>
            <li><Link to="/nutritional">Nutritional Advice</Link></li>
            <li><Link to="/workouts">Workout Plans</Link></li>
            <li><Link to="/achievement">Track Achievements</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
      
        <div className="service-list">
          <Link to="/registration" className="service-item">
          <img src="Join Our Gym.jpg" alt="Track Achievements" />
            <h2>Join Our Gym</h2>
            <p>Receive personalized workout plans.</p>
          </Link>
          <Link to="/nutritional" className="service-item">
          <img src="nutrition-trainer.webp" alt="Track Achievements" />
            <h2>Nutritional Advice</h2>
            <p>Get expert nutritional guidance.</p>
          </Link>
          <Link to="/workouts" className="service-item">
          <img src="Workouts.jpg" alt="Track Achievements" />
            <h2>Workout Plans</h2>
            <p>Access customized workout routines.</p>
          </Link>
          <Link to="/achievement" className="service-item">
          <img src="Track Achievements.jpg" alt="Track Achievements" />
            <h2>Track Achievements</h2>
            <p>Monitor progress and performance.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
