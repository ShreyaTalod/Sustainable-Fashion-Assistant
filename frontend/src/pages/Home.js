import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Sustainable Fashion</h1>
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





