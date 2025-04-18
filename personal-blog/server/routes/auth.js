const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/users');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Logout route
router.post('/logout', logoutUser);

module.exports = router;