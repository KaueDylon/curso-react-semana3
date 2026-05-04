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
        <button className="nav-btn">
          <ShoppingCart />
        </button>
        <button className="nav-btn">
          <SquareArrowRightExit />
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
