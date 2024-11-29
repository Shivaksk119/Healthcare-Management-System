const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router(); // Create a new router

// Define routes for register and login
router.post('/register', register);
router.post('/login', login);

module.exports = router; // Export the router
