// Description: This file contains the logic for user registration and login.
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).send('User already exists');
        }
        user = new User({ username, email, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Log in an existing user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }
        const payload = { user: { id: user.id }};
        jwt.sign(payload, 'yourSecretKey', { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true });
            res.status(200).send('Logged in');
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
