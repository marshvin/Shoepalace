import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the server
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <h2>Men shoes</h2>
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={product.image_url} // Assuming image_url is the S3 bucket URL fetched from the database
            alt={product.name}
            className="w-full h-40 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <div className="flex items-center mb-2">
            <span className="text-gray-500">Rating: {product.rating}</span>
            <span className="mx-2">&#8226;</span>
            <span className="text-gray-500">Price: ${product.price}</span>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
