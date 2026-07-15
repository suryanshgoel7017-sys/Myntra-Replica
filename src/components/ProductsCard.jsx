import "./../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <h3>{product.brand}</h3>

      <p>{product.name}</p>

      <h4>₹ {product.price}</h4>

      <span>⭐ {product.rating}</span>

      <div className="btn-group">
        <button>Add to Cart</button>
        <button>❤</button>
      </div>

    </div>
  );
}

export default ProductCard;