import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handelVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    setVisited(visited ? false : true);
    handelVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <h4>Population : {country.population.population}</h4>
      <h4>Area : {country.area.area}</h4>
      <h5>{country.area.area > 300000 ? "Big Country" : "Small Country"}</h5>
      <button onClick={handelVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
