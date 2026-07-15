import { useParams } from "react-router-dom";
import products from "../data/products";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details">

      <img
        src={product.image}
        alt={product.name}
      />

      <div>

        <h1>{product.brand}</h1>

        <h2>{product.name}</h2>

        <h3>₹ {product.price}</h3>

        <p>
          Rating : ⭐ {product.rating}
        </p>

        <button>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;