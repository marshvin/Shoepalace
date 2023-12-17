const express = require('express');
const { Client } = require('pg');
const cors = require('cors'); 

const app = express();
const port = 3001; // Change this port if needed

app.use(cors());

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'Products',
  password: '1234',
  };

const client = new Client(dbConfig);
client.connect();

app.get('/api/products', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM productinfo');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
