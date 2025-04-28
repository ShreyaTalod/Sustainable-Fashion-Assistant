import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signin">Sign up</a></p>
      </form>
    </div>
  );
};

export default Login;
