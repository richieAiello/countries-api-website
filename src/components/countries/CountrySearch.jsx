import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import clsx from 'clsx';

const CountrySearch = ({
  setEndpoint,
  searchValue,
  setSearchValue,
  setRegionValue,
  stickyStyles,
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
  // Use clsx to change styles of inputs when isIntersecting is false
  // Maybe use props for this?
  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full md:w-[380px] lg:w-[480px]"
    >
      <label htmlFor="search" className="ninja">
        Search Countries
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search countries by name..."
        className={`pl-14 w-full h-10 md:h-14 rounded-md shadow-md shadow-glow-dark dark:shadow-glow-light 
          leading-5 mb-3 md:mb-0
          ${clsx({
            'bg-white': !stickyStyles,
            'dark:bg-blue-grey-light': !stickyStyles,
            'bg-grey': stickyStyles,
            'dark:bg-blue-grey-dark': stickyStyles,
          })}
        `}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-0 h-10 md:h-14 left-0 pl-4 pr-4 duration-300"
      >
        <SearchIcon className="fill-black-light dark:fill-white inline w-4" />
      </button>
    </form>
  );
};

export default CountrySearch;
