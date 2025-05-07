import React, { useState } from "react";
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
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product, size) => {
    if (!size) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const existing = cart.find(
      (item) => item._id === product._id && item.size === size
    );

    if (existing) {
      const updated = cart.map((item) =>
        item._id === product._id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item._id === product._id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item._id !== product._id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const moveToCart = (product) => {
    const exists = cart.find(
      (item) => item._id === product._id && item.size === product.size
    );
    if (exists) {
      const updated = cart.map((item) =>
        item._id === product._id && item.size === product.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setWishlist(wishlist.filter((item) => item._id !== product._id));
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <ShoppingItems
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/mycart"
          element={<MyCart cart={cart} setCart={setCart} />}
        />
        <Route path="/billing" element={<Billing />} />
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} moveToCart={moveToCart} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;








