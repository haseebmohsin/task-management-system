import { useState, useEffect } from "react";
import { addUser, getGroups } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../styles/RegistrationForm.css";
import Button from "./Button";
import Input from "./Input";

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
      toast.error("Error fetching groups:");
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
        <Input
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <Input
          placeholder="Password"
          value={user.Password}
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

        <Button type="submit">Register</Button>

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
