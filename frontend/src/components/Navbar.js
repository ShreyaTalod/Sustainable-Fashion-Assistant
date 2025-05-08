import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Sustainable Fashion</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/shopping" className="nav-link">
          Shop
        </Link>
        <Link to="/mycart" className="nav-link">
          My Cart
        </Link>
        <Link to="/account" className="nav-link">
          My Account
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;




