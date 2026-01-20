import { Link } from "react-router-dom";
import countries from "../data/countries.json";
import "./BorderCountries.css";

function BorderCountries({ borders }) {
  const borderCountries = borders
    ? borders
        .map((code) => countries.find((c) => c.alpha3Code === code))
        .filter(Boolean)
    : [];

  if (borderCountries.length === 0) return null;

  return (
    <div className="borders">
      <h3>Border Countries:</h3>
      <div className="links">
        {borderCountries.map((border) => (
          <Link key={border.alpha3Code} to={`/country/${border.alpha3Code}`}>
            {border.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BorderCountries;
