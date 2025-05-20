// src/pages/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for redirection
import "./Login.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sustainable-fashion-assistant.onrender.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Registration successful!");

        // Save user info to localStorage
        localStorage.setItem("userInfo", JSON.stringify(data));

        // Redirect to home page or login
        navigate("/");
      } else {
        alert(`❌ Registration failed: ${data.message || "Try again"}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default SignUp;


