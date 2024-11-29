const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const { getAllUsers } = require('../controllers/userController');
const router = express.Router();

// Define route to get all users, protected and authorized for specific roles
router.get('/', protect, authorize(['Admin', 'Doctor', 'Nurse']), getAllUsers);

module.exports = router;
