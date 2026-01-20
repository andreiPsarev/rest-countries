import { useState } from "react";
import "./Filter.css";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Filter({ region, setRegion }) {
  const [open, setOpen] = useState(false);

  function selectRegion(value) {
    setRegion(value);
    setOpen(false);
  }

  return (
    <div className="filter">
      <button
        className="filter-btn"
        onClick={() => setOpen((prev) => !prev)}
      >
        {region || "Filter by Region"}
        <span className="arrow">▾</span>
      </button>

      {open && (
        <ul className="filter-list">
          <li onClick={() => selectRegion("")}>All Regions</li>
          {regions.map((r) => (
            <li key={r} onClick={() => selectRegion(r)}>
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
