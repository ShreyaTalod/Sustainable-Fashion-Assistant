import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShoppingItems from "./pages/ShoppingItems";
import MyCart from "./pages/MyCart";
import BillingSuccess from "./pages/BillingSuccess";
import Tips from "./pages/Tips";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";  // <-- New import for Wishlist page
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<ShoppingItems />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/wishlist" element={<Wishlist />} />  {/* New route */}
          <Route path="/billing-success" element={<BillingSuccess />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;



