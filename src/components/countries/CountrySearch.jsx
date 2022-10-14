import { ReactComponent as SearchIcon } from '../../assets/search.svg';

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
    <form
      onSubmit={handleSubmit}
      className="relative w-[min(100%,480px)]"
    >
      <label htmlFor="search" className="ninja">
        Search Countries
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search for a country..."
        className="pl-14 w-full h-14 rounded-md shadow-md leading-5 bg-white dark:bg-blue-grey-light dark:text-white"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-0 bottom-0 left-0 pl-4 pr-4"
      >
        <SearchIcon className="inline w-4" />
      </button>
    </form>
  );
};

export default CountrySearch;
