import React from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css"; // If you have styles

const Account = () => {
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    alert("👋 Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="account-container">
      <h2> Account</h2>
      {userInfo ? (
        <div>
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Account;

