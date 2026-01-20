import { useParams, Link } from "react-router-dom";
import countries from "../data/countries.json";
import BorderCountries from "../components/BorderCountries";
import "./Country.css";

function Country() {
  const { code } = useParams();

  const country = countries.find((c) => c.alpha3Code === code);
  if (!country) return <p>Country not found</p>;

  return (
    <div className="country-page">
                <Link className="back-btn" to="/">
            ⬅ Back
          </Link>
      <div className="country-wrapper">


          <div className="country-card">
            <div className="flag-wrapper">
              <img src={country.flags.svg} alt={country.name} />
            </div>

            <div className="full-info">
              <h1>{country.name}</h1>

              <div className="country-info">
                <div className="left">
                  <p>
                    <b>Native Name:</b> {country.nativeName}
                  </p>
                  <p>
                    <b>Population:</b> {country.population.toLocaleString()}
                  </p>
                  <p>
                    <b>Region:</b> {country.region}
                  </p>
                  <p>
                    <b>Sub Region:</b> {country.subregion}
                  </p>
                  <p>
                    <b>Capital:</b> {country.capital}
                  </p>
                </div>

                <div className="right">
                  <p>
                    <b>Languages:</b>{" "}
                    {country.languages.map((l) => l.name).join(", ")}
                  </p>

                  <p>
                    <b>Currencies:</b>{" "}
                    {country.currencies.map((c) => c.name).join(", ")}
                  </p>
                </div>
              </div>

              <BorderCountries borders={country.borders} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Country;
