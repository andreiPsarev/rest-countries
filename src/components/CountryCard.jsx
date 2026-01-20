import { Link } from "react-router-dom";
import "./CountryCard.css";

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.alpha3Code}`} className="card">
      <img src={country.flags.png} alt={country.name} />
      <div className="info">
        <h3>{country.name}</h3>
        <p>
          <b>Population:</b> {country.population.toLocaleString()}
        </p>
        <p>
          <b>Region:</b> {country.region}
        </p>
        <p>
          <b>Capital:</b> {country.capital}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
