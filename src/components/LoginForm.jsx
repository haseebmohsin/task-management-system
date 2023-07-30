import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import db from "../db.json";
import { toast } from "react-hot-toast";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Check localStorage for the user object on component mount
  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userFromLocalStorage) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      const user = db.users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Store the user object in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
        toast.success("Login Success!");
      } else {
        toast.error("Invalid credentials");
      }
    }
  };

  return (
    <div className="login-form-container">
      <h1>Task Management System</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <div className="register-here-text">
          <span>Don&apos;t have an account?</span>
          <Link to="/register">
            <span>Register here.</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
