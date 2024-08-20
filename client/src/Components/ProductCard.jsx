import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../CartContext';
import Navbar from '../Components/Navbar';
import { FaStar, FaEye } from 'react-icons/fa';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product
  const { addToCart } = useCart();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/products`);
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  // Function to open modal with selected product details
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="text-center my-8">
          <div className="inline-block border-b border-gray-400 w-8 mr-4"></div>
          <h2 className="text-2xl sm:text-2xl text-purple-600 font-bold inline-block">Best Selling Shoes</h2>
          <div className="inline-block border-b border-gray-400 w-8 ml-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-24 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg p-4 h-full relative flex flex-col justify-between" // Adjusted height and layout
            >
              <div>
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-64 object-cover mb-4 rounded-md"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < product.rating ? "#ffc107" : "#e4e5e9"}
                      className="text-yellow-500"
                    />
                  ))}
                  <span className="text-gray-500 ml-4 mb-2 md:mb-0 md:mr-2">
                    {product.rating}
                  </span>
                </div>

                <span className="text-blue-500 mb-2 md:mb-0 md:mr-2">
                  Price: <span className="font-bold text-lg">${product.price}</span>
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  className="justify-center border border-blue-500 text-blue-500 py-2 px-8 rounded hover:bg-blue-500 hover:text-white"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

                {/* Eye Icon for Modal */}
                <button
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => openModal(product)}
                >
                  <FaEye size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <h2 className="text-2xl mb-4">{selectedProduct.brand}</h2>
            <img
              src={selectedProduct.image_url}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <div className="text-gray-700 mb-4">
              <span className="font-medium">Price:</span> $ {selectedProduct.price}
            </div>
            <button
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
