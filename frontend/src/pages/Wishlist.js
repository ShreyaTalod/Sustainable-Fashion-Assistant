import React, { useState } from "react";
import "./Wishlist.css";

const sizes = ["XS", "S", "M", "L"];

const Wishlist = ({ wishlist, moveToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleMoveToCart = (product) => {
    const selectedSize = selectedSizes[product._id];
    if (!selectedSize) {
      alert("Please select a size to move to cart.");
      return;
    }
    moveToCart({ ...product, size: selectedSize });
  };

  return (
    <div className="wishlist-container">
      <h2>❤️ Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist yet.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div className="wishlist-card" key={product._id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${
                      selectedSizes[product._id] === size ? "selected" : ""
                    }`}
                    onClick={() => handleSizeSelect(product._id, size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button onClick={() => handleMoveToCart(product)} className="move-btn">
                Move to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
