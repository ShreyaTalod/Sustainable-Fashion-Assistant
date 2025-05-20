// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // CART HANDLERS
  const addToCart = (item) => {
    // Check if item already exists
    const existingIndex = cartItems.findIndex((i) => i.name === item.name);
    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // WISHLIST HANDLERS
  const addToWishlist = (item) => {
    // Avoid duplicates
    if (!wishlistItems.find((i) => i.name === item.name)) {
      setWishlistItems((prev) => [...prev, item]);
    }
  };

  const removeFromWishlist = (itemName) => {
    setWishlistItems(wishlistItems.filter((i) => i.name !== itemName));
  };

  const moveFromWishlistToCart = (itemName) => {
    const item = wishlistItems.find((i) => i.name === itemName);
    if (item) {
      addToCart(item);
      removeFromWishlist(itemName);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        moveFromWishlistToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};






