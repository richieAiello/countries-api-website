import { useState } from 'react';

const CountrySearch = ({ setState }) => {
  // Move this to parent to clear on region search
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    value
      ? setState(`https://restcountries.com/v3.1/name/${value}`)
      : setState('https://restcountries.com/v3.1/all');
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Search</button>
      <label htmlFor="search" className="ninja">
        Search Countries
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search for a country..."
        className=""
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
};

export default CountrySearch;
