import React, { useState } from 'react';
import { login } from '../../services/api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Auth.css'; // Import Auth-specific styles

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(formData);
            localStorage.setItem('token', data.token);
            alert('Login successful');
            navigate('/dashboard'); // Use navigate instead of history.push
        } catch (err) {
            console.error(err);
            alert('Error logging in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Username: </label>
                <input type="text" name="username" onChange={handleChange} required />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={handleChange} required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;