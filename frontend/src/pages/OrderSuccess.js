import React from 'react';
import { motion } from 'framer-motion';

const OrderSuccess = () => {
  return (
    <motion.div
      className="success-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6ffe6',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        margin: '2rem',
        textAlign: 'center'
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        style={{
          backgroundColor: '#4CAF50',
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ color: '#2e7d32', fontSize: '2rem', fontWeight: 'bold' }}
      >
        Order Placed Successfully!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ color: '#555', fontSize: '1rem', marginTop: '1rem' }}
      >
        Thank you for shopping sustainably. Your order will arrive soon!
      </motion.p>
    </motion.div>
  );
};

export default OrderSuccess;
