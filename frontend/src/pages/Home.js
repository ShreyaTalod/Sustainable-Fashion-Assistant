import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../assets/images/logo.png"; // Update path if it's in a different folder

const Home = () => {
  return (
    <div className="home-container">
      <div className="brand-section">
        <img src={logo} alt="ClosetKind Logo" className="brand-logo" />
        <h1 className="brand-name">ClosetKind</h1>
        <p className="brand-tagline">Fashion with Kindness</p>
      </div>
      <p>Discover eco-friendly clothing and accessories.</p>
      <div className="home-buttons">
        <Link to="/shopping" className="home-btn">
          Start Exploring
        </Link>
        <Link to="/tips" className="home-btn secondary">
          Tips for Sustainable Fashion
        </Link>
      </div>
    </div>
  );
};

export default Home;




