import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import Button from "./Button";

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

        <Button className="logout-button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
