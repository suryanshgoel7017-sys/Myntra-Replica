import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.brand}</h3>

      <p>{product.name}</p>

      <h4>₹ {product.price}</h4>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <button onClick={() => addToWishlist(product)}>
  ❤
</button>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
