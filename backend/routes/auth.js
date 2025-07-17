const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

// POST /api/auth/register
// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, studentId } = req.body;

    // 1. Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // 2. Create new user instance
    // Note: We assume the password will be hashed by a 'pre-save' hook in the User model
    user = new User({
      name,
      email,
      password,
      studentId,
    });

    await user.save();

    // 3. Create JWT token
    const payload = {
      user: {
        id: user.id, // Use user.id which is the virtual getter for _id
        role: user.role, // Include role for easier client-side logic
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    // 4. Send response
    res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    // A more descriptive error log makes debugging easier
    console.error('REGISTRATION_ERROR:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /api/auth/login
// Login user and get token
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 2. Check password
    // Assumes `comparePassword` exists on the User model
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 3. Create JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    // 4. Send response
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('LOGIN_ERROR:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET /api/auth/me
// Get the logged-in user's data
router.get('/me', auth, async (req, res) => {
  try {
    // req.user is attached by the 'auth' middleware
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('GET_ME_ERROR:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;