// src/context/WishlistContext.js
import { useState, useEffect } from "react";

const useWishlistContext = () => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item._id === product._id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item._id !== productId));
  };

  const moveToCart = (product) => {
    // ✅ You can connect this to a CartContext or cart logic elsewhere
    console.log("Moving to cart:", product);
    removeFromWishlist(product._id);
    // Example: send product to cart
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    moveToCart,
  };
};

export default useWishlistContext;
