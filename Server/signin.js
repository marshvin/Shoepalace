const express = require('express');
const client = require('./db');

const router = express.Router();

router.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Check credentials in the database
    const result = await client.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);

    if (result.rows.length > 0) {
      // Successful sign-in
      res.json({ success: true, message: 'Sign-in successful' });
    } else {
      // Invalid credentials
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
