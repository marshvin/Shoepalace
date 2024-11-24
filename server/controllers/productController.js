const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

exports.addProduct = async (req, res) => {
  const { name, brand, price, rating, variations, description, category, in_stock } = req.body;
  const image_url = req.file.location; // Get the image URL from S3

  const newProduct = new Product({
    _id: req.body._id,
    name,
    brand,
    price,
    rating,
    image_url,
    variations: JSON.parse(variations), // Parse variations from JSON string
    description,
    category,
    in_stock,
    created_at: new Date(),
    updated_at: new Date(),
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error adding product' });
  }
};
