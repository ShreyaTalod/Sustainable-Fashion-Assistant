import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Wishlist.css';

const Wishlist = () => {
  const {
    wishlistItems,
    removeFromWishlist,
    moveFromWishlistToCart,
  } = useContext(CartContext);

  if (wishlistItems.length === 0) {
    return <p>Your wishlist is empty.</p>;
  }

  return (
    <div>
      <h2>Your Wishlist</h2>
      <div className="wishlist-grid">
        {wishlistItems.map((item, index) => (
          <div key={index} className="wishlist-card">
            <img src={item.image} alt={item.name} style={{ width: "150px" }} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              onClick={() => moveFromWishlistToCart(item.name)}
              style={{ marginRight: "10px" }}
            >
              Add to Cart
            </button>
            <button onClick={() => removeFromWishlist(item.name)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
