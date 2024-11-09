import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../CartContext';
import Navbar from '../Components/Navbar';
import { FaStar, FaEye, FaShoppingCart } from 'react-icons/fa';
import FilterSidebar from './FilterSidebar';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: Infinity });
  const { addToCart, cartItems } = useCart();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [addedItems, setAddedItems] = useState({});

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

  // Get unique categories and brands from products
  const categories = [...new Set(products.map(product => product.category))];
  const brands = [...new Set(products.map(product => product.brand))];

  // Handle filter changes
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const handlePriceChange = (range) => {
    setSelectedPriceRange(range);
  };

  // Filter products based on all selected filters
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max;
    
    return matchesCategory && matchesBrand && matchesPrice;
  });

  // Function to open modal with selected product details
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item._id === productId);
  };

  const handleAddToCart = (product) => {
    if (!isInCart(product._id)) {
      addToCart(product);
      setAddedItems(prev => ({
        ...prev,
        [product._id]: true
      }));
    }
  };

  return (
    <div>
    <Navbar />
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6 my-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <FilterSidebar
            categories={categories}
            brands={brands}
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
            selectedPriceRange={selectedPriceRange}
            onCategoryChange={handleCategoryChange}
            onBrandChange={handleBrandChange}
            onPriceChange={handlePriceChange}
          />
        </div>

        {/* Products Grid */}
        <div className="md:w-3/4">
          <div className="text-center mb-8">
            <div className="inline-block border-b-2 border-purple-400 w-12 mr-4"></div>
            <h2 className="text-3xl text-purple-600 font-bold inline-block">
              Best Selling Shoes
            </h2>
            <div className="inline-block border-b-2 border-purple-400 w-12 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Quick View Button Overlay */}
                  <button
                    onClick={() => openModal(product)}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <FaEye className="text-gray-700 text-xl" />
                  </button>
                </div>

                {/* Content Container */}
                <div className="p-5">
                  {/* Brand */}
                  <span className="text-sm text-purple-600 font-medium mb-2 block">
                    {product.brand}
                  </span>
                  
                  {/* Product Name */}
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-gray-800">
                      <span className="text-sm text-gray-500">Price</span>
                      <p className="text-xl font-bold">${product.price}</p>
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isInCart(product._id)}
                      className={`flex items-center gap-2 ${
                        isInCart(product._id)
                          ? 'bg-green-500'
                          : 'bg-purple-600 hover:bg-purple-700'
                      } text-white px-4 py-2 rounded-lg transition-colors duration-200`}
                    >
                      <FaShoppingCart className="text-lg" />
                      <span>{isInCart(product._id) ? 'Added' : 'Add'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Modal */}
    {selectedProduct && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden animate-modal-fade-in">
          <div className="flex flex-row">
            {/* Image Section */}
            <div className="w-1/2 relative">
              <img
                src={selectedProduct.image_url}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
                style={{ maxHeight: '400px' }}
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Content Section */}
            <div className="w-1/2 p-5 flex flex-col">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-purple-600 mb-1">
                  {selectedProduct.brand}
                </h3>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedProduct.name}
                </h2>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < selectedProduct.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">
                    ({selectedProduct.rating})
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                  {selectedProduct.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Price</span>
                    <p className="text-2xl font-bold text-gray-800">
                      ${selectedProduct.price}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      closeModal();
                    }}
                    disabled={isInCart(selectedProduct._id)}
                    className={`flex items-center gap-2 ${
                      isInCart(selectedProduct._id)
                        ? 'bg-green-500'
                        : 'bg-purple-600 hover:bg-purple-700'
                    } text-white px-4 py-2 rounded-lg transition-colors`}
                  >
                    <FaShoppingCart className="text-lg" />
                    <span>{isInCart(selectedProduct._id) ? 'Added' : 'Add'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default ProductCard;
