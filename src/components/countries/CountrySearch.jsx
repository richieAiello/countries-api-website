const CountrySearch = ({
  setEndpoint,
  searchValue,
  setSearchValue,
  setRegionValue,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    searchValue
      ? setEndpoint(
          `https://restcountries.com/v3.1/name/${searchValue}`
        )
      : setEndpoint('https://restcountries.com/v3.1/all');
    setSearchValue('');
    setRegionValue('');
  };

  // Not sure if this needs to be a form. Try with just state, input and onChange
  return (
    <form onSubmit={handleSubmit} className="relative">
      <button type="submit" className="absolute">
        Search
      </button>
      <label htmlFor="search" className="ninja">
        Search Countries
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search for a country..."
        className="pl-8"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default CountrySearch;
