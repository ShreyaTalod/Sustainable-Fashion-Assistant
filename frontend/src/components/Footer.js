// src/components/Footer.js
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        marginTop: "3rem",
        padding: "1.5rem",
        backgroundColor: "#f1f1f1",
        color: "#333",
        fontSize: "0.95rem",
      }}
    >
      <p>© 2025 Sustainable Fashion Assistant. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
