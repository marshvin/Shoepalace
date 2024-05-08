// models/productModel.js
const pool = require('../utils/db');


class Product {
  static async getAllProducts() {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT id, name, rating, price, image_url FROM products');
      client.release();
      return result.rows;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}

module.exports = Product;
