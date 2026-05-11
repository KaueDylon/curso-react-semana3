import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  ShoppingCart,
  SquareArrowRightEnter,
  SquareArrowRightExit,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        Compraki
      </NavLink>
      {/* <div className="logo">Compraki</div> */}

      <ul className="menu">
        <NavLink className="nav-btn" to="/carrinho">
          <ShoppingCart />
        </NavLink>

        {isAuthenticated ? (
          <button className="nav-btn" onClick={handleLogout}>
            <SquareArrowRightExit />
          </button>
        ) : (
          <NavLink className="nav-btn" to="/login">
            <SquareArrowRightEnter />
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
