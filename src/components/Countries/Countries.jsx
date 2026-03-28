import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([])
  const handelVisitedCountries = (country) => {
    console.log(country)
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
  return (
    <div>
      <h2>Total Countries - {countries.length}</h2>
      <h3>Visited Countries - {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
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