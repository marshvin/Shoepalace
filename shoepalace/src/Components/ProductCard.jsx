import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../CartContext';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-3 flex justify-center items-center mb-8">
        <div className="inline-block border-b border-gray-400 w-16 mr-4"></div>
        <h2 className="text-3xl text-purple-600 font-bold inline-block">Best selling Collections</h2>
        <div className="inline-block border-b border-gray-400 w-16 ml-4"></div>
      </div>
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
              Price: ${product.price}
            </span>
          </div>
          <button 
            className="bg-blue-500 text-white py-2 px-2 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
