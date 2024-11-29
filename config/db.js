const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from the environment variables
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Use the new URL parser instead of the deprecated one
            useUnifiedTopology: true // Use the new server discovery and monitoring engine
        });
        console.log('MongoDB connected');

        // Ensure the User collection exists by creating a dummy document and then deleting it
        const User = mongoose.model('User', new mongoose.Schema({
            username: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            role: { type: String, enum: ['Admin', 'Doctor', 'Nurse', 'Patient'], default: 'Patient' }
        }));
        const dummyUser = new User({
            username: 'dummyUser',
            password: 'dummyPassword',
            role: 'Patient'
        });
        await dummyUser.save();
        await User.deleteOne({ username: 'dummyUser' });

        console.log('Collections are ensured');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;