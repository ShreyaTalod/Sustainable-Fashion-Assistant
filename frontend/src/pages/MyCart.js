import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./MyCart.css";

const MyCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(index, newQuantity);
    }
  };

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const handleProceedToBilling = () => {
    navigate("/billing-success");
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseInt(item.price.replace("₹", "")) * item.quantity,
    0
  );

  return (
    <div className="mycart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(index, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(index)} className="remove-button">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button onClick={handleProceedToBilling} className="checkout-button">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;







