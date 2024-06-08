import React from 'react';
import { useCart } from '../CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (index, event) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      updateQuantity(index, quantity);
    }
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="flex-grow flex flex-col space-y-4 mb-4 lg:mb-0">
            {cart.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-20 h-20 object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <div className="flex flex-col md:flex-row md:items-center mb-2">
                    <span className="text-gray-500 mb-2 md:mb-0 md:mr-2">
                      Rating: {product.rating}
                    </span>
                    <span className="text-gray-500 mb-2 md:mb-0 md:mr-2">&#8226;</span>
                    <span className="text-gray-500 mb-2 md:mb-0 md:mr-2">
                      Price: ${product.price}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${index}`} className="mr-2">Quantity:</label>
                    <input
                      id={`quantity-${index}`}
                      type="number"
                      value={product.quantity}
                      onChange={(event) => handleQuantityChange(index, event)}
                      className="border rounded p-1 w-16"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 md:mt-0"
                >
                  Remove
                </button>
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
