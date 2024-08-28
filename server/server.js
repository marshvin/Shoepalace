// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();
// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());
// Ping endpoint to keep the server awake
app.get('/ping', (req, res) => {
  res.send('Server is awake!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Use product routes
app.use('/api', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
