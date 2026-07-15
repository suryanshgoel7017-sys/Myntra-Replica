import ProductsCard from "./ProductsCard";
import products from "../data/products";
import "./../styles/ProductList.css";

function ProductList() {
  return (
    <div className="product-list">

      {products.map((item) => (
        <ProductsCard key={item.id} product={item} />
      ))}

    </div>
  );
}

export default ProductList;