const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express(); // Create a new Express application
connectDB(); // Connect to the MongoDB database

app.use(express.json()); // Middleware to parse JSON request bodies

// Define routes for API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 27017;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
