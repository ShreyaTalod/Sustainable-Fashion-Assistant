// src/pages/BillingSuccess.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./BillingSuccess.css";

const BillingSuccess = () => {
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate("/shopping");
  };

  return (
    <div className="billing-success-container">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="success-message"
      >
        🎉 Order Placed Successfully! 🎉
      </motion.h1>

      <motion.div
        className="smiley-burst"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-20, 0, -20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        😊 😄 🛍️ 👗 🧢 👟 💚
      </motion.div>

      <motion.button
        className="back-to-shop-button"
        whileHover={{ scale: 1.1 }}
        onClick={handleBackToShop}
      >
        Continue Shopping
      </motion.button>
    </div>
  );
};

export default BillingSuccess;
