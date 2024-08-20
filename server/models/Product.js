const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
  size: Number,
  color: String,
  stock: Number,
});

const productSchema = new mongoose.Schema({
  _id: String,
  name: String,
  brand: String,
  price: Number,
  rating: Number,
  image_url: String,
  variations: [variationSchema],
  description: String,
  category: String,
  in_stock: Boolean,
  created_at: Date,
  updated_at: Date,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
