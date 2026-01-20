import "./Header.css"
function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <button
        className="theme-btn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
