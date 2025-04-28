import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Billing.css";

const Billing = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000); // Reset after animation
  };

  const smileys = ["😊", "😎", "🎉", "💚", "✨", "😁", "🌿", "👕"];

  return (
    <div className="billing-container">
      {!orderPlaced ? (
        <>
          <h2>Billing Summary</h2>
          {/* Billing Details */}
          <button className="place-order-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      ) : (
        <motion.div
          className="order-success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>🎉 Order Placed Successfully! 🎉</h2>

          <AnimatePresence>
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.span
                className="smiley"
                key={i}
                initial={{
                  opacity: 0,
                  y: 0,
                  x: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  y: -200 - Math.random() * 100,
                  x: (Math.random() - 0.5) * 300,
                  scale: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {smileys[Math.floor(Math.random() * smileys.length)]}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default Billing;


