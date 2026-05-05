import { NavLink } from "react-router-dom";
import Searchbox from "../searchBox/Searchbox";
import "./Navbar.css";
import { ShoppingCart, SquareArrowRightExit } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Compraki</div>

      <ul className="menu">
        <div>
          <Searchbox />
        </div>

        <NavLink className="nav-btn" to="/carrinho">
          <ShoppingCart />
        </NavLink>

        <NavLink className="nav-btn" to="/login">
          <SquareArrowRightExit />
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
