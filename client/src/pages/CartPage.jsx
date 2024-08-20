import React, { useState, useMemo } from 'react';
import { useCart } from '../CartContext';
import Navbar from '../Components/Navbar';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, updateCartItem } = useCart();
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});

  // Calculate total price
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  // Find available stock based on selected color and size
  const getStock = (itemId, color, size) => {
    const item = cartItems.find(item => item._id === itemId);
    const variation = item.variations.find(
      (variant) => variant.color === color && variant.size === size
    );
    return variation ? variation.stock : 0;
  };

  // Handle color change and reset size if necessary
  const handleColorChange = (itemId, color) => {
    setSelectedColor((prevState) => ({
      ...prevState,
      [itemId]: color,
    }));
    setSelectedSize((prevState) => ({
      ...prevState,
      [itemId]: null, // Reset size on color change
    }));
    updateCartItem(itemId, { color });
  };

  // Handle size change
  const handleSizeChange = (itemId, size) => {
    setSelectedSize((prevState) => ({
      ...prevState,
      [itemId]: size,
    }));
    updateCartItem(itemId, { size });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md"
                >
                  {/* Product Image */}
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full md:w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
                  />

                  {/* Product Details */}
                  <div className="flex-1 w-full">
                    <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Brand:</span> {item.brand}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Price:</span> $ {item.price}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Category:</span> {item.category}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Description:</span> {item.description}
                    </p>

                    {/* Color Picker */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Color:</label>
                      <div className="flex space-x-2">
                        {Array.from(new Set(item.variations.map(variation => variation.color))).map((color) => (
                          <button
                            key={color}
                            className={`w-8 h-8 rounded-full border-2 ${
                              selectedColor[item._id] === color ? 'border-gray-800' : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorChange(item._id, color)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Size Picker */}
                    {selectedColor[item._id] && (
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Size:</label>
                        <select
                          value={selectedSize[item._id] || ""}
                          onChange={(e) => handleSizeChange(item._id, e.target.value)}
                          className="w-full md:w-32 border border-gray-300 rounded-md p-2"
                        >
                          <option value="" disabled>Select Size</option>
                          {item.variations
                            .filter(variation => variation.color === selectedColor[item._id])
                            .map(variation => (
                              <option key={variation._id} value={variation.size}>
                                {variation.size}
                              </option>
                            ))}
                        </select>
                      </div>
                    )}

                    {/* Availability */}
                    {selectedColor[item._id] && selectedSize[item._id] && (
                      <p
                        className={`mb-4 font-medium ${
                          getStock(item._id, selectedColor[item._id], selectedSize[item._id]) > 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {getStock(item._id, selectedColor[item._id], selectedSize[item._id]) > 0
                          ? 'In Stock'
                          : 'Out of Stock'}
                      </p>
                    )}

                    {/* Quantity */}
                    <p className="text-gray-700 mb-4">
                      <span className="font-medium">Quantity:</span> {item.quantity}
                    </p>

                    {/* Remove Button */}
                    <button
                      className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              {/* Clear Cart Button */}
              <button
                className="mt-4 py-3 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>

            {/* Checkout Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Checkout Summary</h3>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Total Items:</span> {cartItems.length}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Total Price:</span> $ {totalPrice.toFixed(2)}
              </p>
              <button
                className="w-full py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
