import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Myntra</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/wishlist">
          Wishlist
        </Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;