import { ReactComponent as Arrow } from '../../assets/down-arrow.svg';
import clsx from 'clsx';

const CountryRegion = ({
  setEndpoint,
  setRegionValue,
  regionValue,
  searchStyles,
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
    <div className="relative rounded-md shadow-md w-[200px] shadow-glow-dark dark:shadow-glow-light">
      <select
        name="region"
        value={regionValue}
        onChange={handleChange}
        className={`relative h-10 md:h-14 w-full pl-6 pr-6 cursor-pointer rounded-md bg-white
         dark:bg-blue-grey-light dark:text-white
         ${clsx({
           'sticky-search__input': !searchStyles,
         })}
         `}
      >
        <option value="">All Regions</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <span
        className={`block absolute bg-white dark:bg-blue-grey-light h-10 md:h-14
        w-8 top-0 right-0 rounded-md pointer-events-none
        ${clsx({
          'sticky-search__input--secondary': !searchStyles,
        })}
        `}
      >
        <Arrow className="w-3 inline absolute top-0 bottom-0 my-auto right-4" />
      </span>
    </div>
  );
};

export default CountryRegion;
