import "./../styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for products..."
      />
    </div>
  );
}

export default SearchBar;