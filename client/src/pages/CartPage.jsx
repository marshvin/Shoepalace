// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../CartContext';
import Navbar from '../Components/Navbar';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold my-8">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg mb-4"
              >
                <div>
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Brand: {item.brand}</p>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
