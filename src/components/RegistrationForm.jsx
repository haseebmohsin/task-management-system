import React, { useState, useEffect } from "react";
import { addUser, getGroups } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    username: "",
    password: "",
    groupId: "",
  });
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await getGroups();
      setGroups(response.data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.username.trim() && user.password.trim() && user.groupId.trim()) {
      try {
        const newUser = {
          ...user,
          id: new Date().getTime().toString(),
        };
        await addUser(newUser);

        localStorage.setItem("user", JSON.stringify(newUser));
        navigate("/home");
      } catch (error) {
        console.log(error);
        toast.error("Registration Failed!");
      }

      setUser({
        id: "",
        username: "",
        password: "",
        groupId: "",
      });
    }
  };

  return (
    <div className="registration-form-container">
      <h1>Task Management System</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <select
          value={user.groupId}
          onChange={(e) => setUser({ ...user, groupId: e.target.value })}
          style={{ marginBottom: "10px", height: "40px" }}
        >
          <option value="">Select a group</option>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>

        <button type="submit">Register</button>

        <div className="login-here-text">
          <span>Already have an account?</span>
          <Link to="/login">
            <span>Login here.</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
