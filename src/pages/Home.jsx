import { useState } from "react";
import countries from "../data/countries.json";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import Search from "../components/Search";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState(""); 
  const [region, setRegion] = useState(""); 

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || country.region === region)
  );

  return (
    <div>
      <div className="controls">
        <Search search={search} setSearch={setSearch} />
        <Filter region={region} setRegion={setRegion} />
      </div>

      <div className="grid">
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;
