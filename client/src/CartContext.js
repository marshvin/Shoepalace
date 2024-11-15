// src/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item._id === product._id);

      if (existingItem) {
        // If item exists, don't modify the cart
        return prevItems;
      } else {
        // Add the new product to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // New function to update a cart item based on its ID
  const updateCartItem = (productId, updatedProperties) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, ...updatedProperties } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
