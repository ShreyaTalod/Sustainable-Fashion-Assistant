import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for redirection
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // navigation hook

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://sustainable-fashion-assistant.onrender.com/api/users/login", formData);
      const userData = res.data;

      // Save to localStorage
      localStorage.setItem("userInfo", JSON.stringify(userData));

      alert("✅ Login successful!");

      // Redirect to home page or dashboard
      navigate("/");
    } catch (error) {
      alert("❌ Login failed: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
};

export default Login;


