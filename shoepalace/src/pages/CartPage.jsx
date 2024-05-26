import React from 'react';
import { useCart } from '../CartContext';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
