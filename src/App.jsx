import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <HashRouter>
      <Header theme={theme} setTheme={setTheme} />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<Country />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
