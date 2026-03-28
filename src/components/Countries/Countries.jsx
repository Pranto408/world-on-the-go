import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([])


  const handelVisitedCountries = (country) => {
    const exists = visitedCountries.find(
      (c) => c.name.common === country.name.common,
    );

    if (exists) {
      const remaining = visitedCountries.filter(
        (c) => c.name.common !== country.name.common,
      );
      setVisitedCountries(remaining);
    } else {
      setVisitedCountries([...visitedCountries, country]);
    }
  };
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
  return (
    <div>
      <h2>Total Countries - {countries.length}</h2>
      <h3>Visited Countries - {visitedCountries.length}</h3>
      <ul>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ul>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handelVisitedCountries={handelVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;