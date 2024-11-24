const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Set up multer for S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, `products/${Date.now().toString()}_${file.originalname}`);
    },
  }),
});

// Route to get all products with all details
router.get('/products', productController.getAllProducts);

// Route to add a new product
router.post('/products', upload.single('image'), productController.addProduct);

module.exports = router;
