const CountryRegion = ({
  setEndpoint,
  setRegionValue,
  regionValue,
}) => {
  const handleChange = e => {
    setRegionValue(e.target.value);

    e.target.value
      ? setEndpoint(
          `https://restcountries.com/v3.1/region/${e.target.value}`
        )
      : setEndpoint('https://restcountries.com/v3.1/all');
  };

  return (
    <select name="region" value={regionValue} onChange={handleChange}>
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
