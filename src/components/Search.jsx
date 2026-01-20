import "./Search.css";

function Search({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search for a country..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
