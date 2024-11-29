import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import Navbar-specific styles

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard/admin">Admin Dashboard</Link></li>
                <li><Link to="/dashboard/doctor">Doctor Dashboard</Link></li>
                <li><Link to="/dashboard/nurse">Nurse Dashboard</Link></li>
                <li><Link to="/dashboard/patient">Patient Dashboard</Link></li>
                <li><Link to="/users">User List</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;