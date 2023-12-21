// FeaturedProducts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ShoeCard = ({ id, productname, image_data, ratings, price, onAddToCart }) => {
  const imageUrl = `data:image/png;base64,${image_data}`;
  return (
    <div className="flex-shrink-0 max-w-md mx-4 my-8 lg:my-0 lg:mx-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover object-center" src={imageUrl} alt={productname} />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{productname}</h3>
        <p className="text-gray-700 mb-2">${price}</p>
        <div className="flex items-center mb-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => onAddToCart({ id, productname, price })}
          >
            Add to Cart
          </button>
        </div>
        {/* Additional logic for rendering stars if needed */}
        <div className="flex items-center">
          {Array.from({ length: ratings }, (_, index) => (
            <span key={index} className="text-yellow-500">
              ★
            </span>
          ))}
          {Array.from({ length: 5 - ratings }, (_, index) => (
            <span key={index} className="text-gray-400">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ShoeCard key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
