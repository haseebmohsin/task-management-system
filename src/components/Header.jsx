import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="user-info">
        <div>
          Username: {user?.username} | Group ID: {user?.groupId}
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
