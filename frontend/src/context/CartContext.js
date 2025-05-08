// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product, selectedSize) => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const existingItem = cartItems.find(
      item => item._id === product._id && item.size === selectedSize
    );

    if (existingItem) {
      setCartItems(prev =>
        prev.map(item =>
          item._id === product._id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(prev => [
        ...prev,
        { ...product, quantity: 1, size: selectedSize },
      ]);
    }
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev =>
      prev.filter(item => !(item._id === productId && item.size === size))
    );
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.find(item => item._id === product._id)) {
      setWishlistItems(prev => [...prev, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev =>
      prev.filter(item => item._id !== productId)
    );
  };

  const moveToCartFromWishlist = (product, selectedSize) => {
    addToCart(product, selectedSize);
    removeFromWishlist(product._id);
  };

  const isWishlisted = (productId) => {
    return wishlistItems.some(item => item._id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        moveToCartFromWishlist,
        isWishlisted
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



