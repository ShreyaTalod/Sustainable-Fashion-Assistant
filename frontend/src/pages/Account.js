import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => setIsSignUp(!isSignUp);

  return (
    <div className="account-container">
      <div className="account-box">
        <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>

        <form className="account-form">
          {isSignUp && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>

        <p className="toggle-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={handleToggle}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Account;
