// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShoppingItems from "./pages/ShoppingItems";
import MyCart from "./pages/MyCart";
import Billing from "./pages/Billing";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Wishlist from "./pages/Wishlist";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShoppingItems />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
