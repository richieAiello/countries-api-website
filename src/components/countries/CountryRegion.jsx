import { useState } from 'react';

const CountryRegion = ({ setState }) => {
  // Move this to parent to clear on searchbar search
  const [region, setRegion] = useState('');

  const handleChange = e => {
    setRegion(e.target.value);

    e.target.value
      ? setState(
          `https://restcountries.com/v3.1/region/${e.target.value}`
        )
      : setState('https://restcountries.com/v3.1/all');
  };

  return (
    <select name="region" value={region} onChange={handleChange}>
      <option value="">All Regions</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default CountryRegion;
