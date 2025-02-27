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
import ProfilePage from './Components/ProfilePage/ProfilePage';
import Contact from './Components/Contact/Contact';
import Achievement from './Components/Services/Achievement/Achievement';
import WorkRoutine from './Components/Services/WorkRoutine';
import Calarieintake from './Components/Services/Calarieintake/Calarieintake';
import Progress from './Components/Services/Progress/Progress';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Body />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element={<Service />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/nutritional" element={<Nutritional />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievement" element={<Achievement/>} />
        <Route path="/work-routinet" element={<WorkRoutine/>} />
        <Route path="/calarie-intake" element={<Calarieintake/>} />
        <Route path="/progress-monitoring" element={<Progress/>} />
        
      </Routes>
     
    </Router>
  );
}

export default App;