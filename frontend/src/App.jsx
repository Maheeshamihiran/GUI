import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import SignUp from './Components/SignUp/SignUp';
import Service from './Components/Services/Service/Service';
import RegistrationForm from './Components/Services/RegistrationForm';
import Nutritional from './Components/Services/Nutritional Advice/Nutritional';
import Workouts from './Components/Services/Workouts/Workouts';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element={<Service />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/nutritional" element={<Nutritional />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </Router>
  );
}

export default App;