import { ReactComponent as Arrow } from '../../assets/down-arrow.svg';
import clsx from 'clsx';

const CountryRegion = ({
  setEndpoint,
  setRegionValue,
  regionValue,
  stickyStyles,
  setSearchResults,
}) => {
  const handleChange = e => {
    const region = e.target.value;
    setRegionValue(region);
    region &&
      setEndpoint(`https://restcountries.com/v3.1/region/${region}`);
    region &&
      setSearchResults(
        ` countries in ${region[0].toUpperCase()}${region.substring(
          1
        )}!`
      );
  };

  return (
    <div className="relative rounded-md shadow-md w-[min(100%,200px)] shadow-glow-dark dark:shadow-glow-light focus:outline-red-600">
      <select
        name="region"
        value={regionValue}
        onChange={handleChange}
        className={`relative h-10 md:h-14 w-full pr-10 pl-4 cursor-pointer rounded-md appearance-none 
        sm:pl-6 sm:pr-12 outline-black-light dark:outline-white outline-2 hover:outline focus:outline 
          ${clsx({
            'bg-white': !stickyStyles,
            'dark:bg-blue-grey-light': !stickyStyles,
            'bg-grey': stickyStyles,
            'dark:bg-blue-grey-dark': stickyStyles,
          })}
         `}
      >
        <option disabled value="">
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <span
        className={`block absolute h-10 md:h-14
        w-8 top-0 right-0 rounded-md pointer-events-none
          ${clsx({
            'bg-white': !stickyStyles,
            'dark:bg-blue-grey-light': !stickyStyles,
            'bg-grey': stickyStyles,
            'dark:bg-blue-grey-dark': stickyStyles,
          })}
        `}
      >
        <Arrow className="fill-black-light dark:fill-white w-3 inline absolute top-0 bottom-0 my-auto right-4" />
      </span>
    </div>
  );
};

export default CountryRegion;
