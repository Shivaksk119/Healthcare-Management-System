import React, { useState } from 'react'; // Import React and useState hook
import { login } from '../../services/api'; // Import the login function from the API service
import { useHistory } from 'react-router-dom'; // Import useHistory hook from react-router-dom

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const history = useHistory(); // Get the history object

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(formData); // Call the login function with form data
            localStorage.setItem('token', data.token); // Store the token in local storage
            alert('Login successful');
            history.push('/dashboard'); // Redirect to the dashboard
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
