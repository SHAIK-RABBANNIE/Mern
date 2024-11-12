import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import CourseRegistrationForm from './components/CourseRegistrationForm';
import Videos from './components/Videos'; // Import the Videos component
import './App.css';
import Profile from './components/Profile'; // Adjust path as needed
import SelfLearning from './components/SelfLearning';
import AssignmentPage from './components/Assignments';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<CourseRegistrationForm />} />
                    <Route path="/videos/:course" element={<Videos />} /> {/* Route for Videos */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/logout" element={<Logout />} /> {/* Logout page */}
                    <Route path="/self-learning" element={<SelfLearning />} />
                    <Route path="/Assignment" element={<AssignmentPage />} />
                  
                </Routes>
            </div>
        </Router>
    );
}

export default App;
