import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/cart">
        Cart ({cart.length})
      </Link>
      <Link to="/wishlist">
       
        Wishlist
      </Link>
    </nav>
  );
}

export default Navbar;