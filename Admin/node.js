const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Products',
  password: '1234',
  port: 5432,
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { productname, price, ratings } = req.body;
    const imageBuffer = req.file.buffer;

    const result = await pool.query(
      'INSERT INTO productinformat (productname, price, ratings, image_data) VALUES ($1, $2, $3, $4) RETURNING id',
      [productname, price, ratings, imageBuffer]
    );

    const productId = result.rows[0].productid;

    console.log(`Product and image uploaded with productid: ${productId}`);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
