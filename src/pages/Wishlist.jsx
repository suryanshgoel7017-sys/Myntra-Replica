import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import "../styles/Wishlist.css";

function Wishlist() {
  const { wishlist, removeFromWishlist } =
    useContext(WishlistContext);

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No Products Added</h2>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.brand}</h3>

              <p>{item.name}</p>

              <button
                onClick={() =>
                  removeFromWishlist(item.id)
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;