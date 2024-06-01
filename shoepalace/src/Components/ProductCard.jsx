import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../CartContext';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center my-8">
        <div className="inline-block border-b border-gray-400 w-16 mr-4"></div>
        <h2 className="text-2xl sm:text-3xl text-purple-600 font-bold inline-block">Best Selling Collections</h2>
        <div className="inline-block border-b border-gray-400 w-16 ml-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <div className="flex flex-col mb-2 md:flex-row md:items-center">
              <span className="text-gray-500 mb-2 md:mb-0 md:mr-2">
                Rating: {product.rating}
              </span>
              <span className="text-gray-500 mb-2 md:mb-0 md:mr-2">&#8226;</span>
              <span className="text-gray-500 mb-2 md:mb-0 md:mr-2">
                Price: <span className="font-bold text-lg">${product.price}</span>
              </span>
            </div>
            <button 
              className="border border-blue-500 text-blue-500 py-2 px-2 rounded hover:bg-blue-500 hover:text-white"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
