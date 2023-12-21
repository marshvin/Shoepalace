const express = require('express');
const cors = require('cors');
const client = require('./db');

const app = express();
const port = 3001; // Change this port if needed

app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM productinformat');
    const products = result.rows.map((product) => ({
      ...product,
      image_data: product.image_data.toString('base64'), // Convert bytea to Base64
    }));
    res.json(products);
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, password]
    );

    res.json({ success: true, user: result.rows[0] });
  } catch (error) {
    console.error('Error inserting into the database:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});