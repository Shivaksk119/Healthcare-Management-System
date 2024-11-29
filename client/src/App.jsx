import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import Navbar from './components/Layout/Navbar';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import NurseDashboard from './components/Dashboard/NurseDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import UserList from './components/Users/UserList';
import './App.css'; // Import App.css for global styles

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/register" element={<Register />} /> {/* Use element prop */}
                <Route path="/login" element={<Login />} /> {/* Use element prop */}
                <Route path="/dashboard/admin" element={<AdminDashboard />} /> {/* Use element prop */}
                <Route path="/dashboard/doctor" element={<DoctorDashboard />} /> {/* Use element prop */}
                <Route path="/dashboard/nurse" element={<NurseDashboard />} /> {/* Use element prop */}
                <Route path="/dashboard/patient" element={<PatientDashboard />} /> {/* Use element prop */}
                <Route path="/users" element={<UserList />} /> {/* Use element prop */}
            </Routes>
        </Router>
    );
};

export default App;