const express = require('express'); // Import express
const router = express.Router(); // Create a new router
const { register, login } = require('../controllers/authController'); // Import the functions from the controller

router.post('/register', register); // Register a new user
router.post('/login', login); // Log in an existing user

module.exports = router; // Export the router
