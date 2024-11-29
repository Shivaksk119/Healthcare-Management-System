import React, { useState } from 'react';
import { register } from '../../services/api';
import './Auth.css'; // Import Auth-specific styles

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'Patient'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            alert('User registered successfully');
        } catch (err) {
            console.error(err);
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
                <label>Username: </label>
                <input type="text" name="username" onChange={handleChange} required />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={handleChange} required />
            </div>
            <div>
                <label>Role: </label>
                <select name="role" onChange={handleChange}>
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;