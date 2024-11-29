import axios from 'axios';

const API_URL = '/api';

// Function to register a new user
export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

// Function to login a user
export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
};

// Function to get all users
export const getUsers = async (token) => {
    const response = await axios.get(`${API_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
