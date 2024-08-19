import React from 'react';
import { useCart } from '../CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, updateColor, updateSize } = useCart();

  const handleQuantityChange = (index, event) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      updateQuantity(index, quantity);
    }
  };

  const handleColorChange = (index, color) => {
    updateColor(index, color);
  };

  const handleSizeChange = (index, event) => {
    const size = event.target.value;
    updateSize(index, size);
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  // Sample color options
  const colorOptions = ['red', 'blue', 'green', 'yellow', 'purple'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="flex-grow">
            {cart.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col lg:flex-row items-start mb-4">
                <div className="lg:w-1/4 lg:mr-4 mb-4 lg:mb-0">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-40 h-40 object-cover"
                  />
                </div>
                <div className="lg:w-3/4 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center mb-2">
                    <label htmlFor={`quantity-${index}`} className="mr-2">Quantity:</label>
                    <input
                      id={`quantity-${index}`}
                      type="number"
                      value={product.quantity}
                      onChange={(event) => handleQuantityChange(index, event)}
                      className="border rounded p-1 w-16 mr-4"
                    />
                    <label htmlFor={`size-${index}`} className="mr-2">Size:</label>
                    <div className="relative">
                      <select
                        id={`size-${index}`}
                        value={product.size}
                        onChange={(event) => handleSizeChange(index, event)}
                        className="border rounded p-1 pr-8 appearance-none"
                        style={{ appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }}
                      >
                        <option value="">Select size</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <label className="mr-2">Color:</label>
                    <div className="flex ml-2">
                      {colorOptions.map((color) => (
                        <div
                          key={color}
                          className={`w-8 h-8 rounded-full cursor-pointer border border-gray-300 ${color === product.color ? `bg-${color}-500` : `bg-${color}-200`}`}
                          onClick={() => handleColorChange(index, color)}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">Rating: {product.rating}</span>
                    <span className="text-gray-500">&#8226;</span>
                    <span className="text-gray-500 ml-2">Price: ${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 w-full p-4 bg-gray-100 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{cart.reduce((total, product) => total + product.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
