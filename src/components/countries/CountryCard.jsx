import { Link } from 'react-router-dom';
import { useRef } from 'react';

// Turn each card into a cliackable link leading towards that countries info page.
const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
  code,
}) => {
  const linkRef = useRef(null);

  // Fix max length of card title
  return (
    <li
      className="shadow-md shadow-glow-dark dark:shadow-glow-light rounded-md bg-white text-black-light dark:bg-blue-grey-light dark:text-white 
      w-[min(100%,264px)] h-[336px] text-[0.875rem] leading-4 font-normal cursor-pointer duration-100  
      hover:scale-105 focus:scale-105"
      onClick={e => linkRef.current.click()}
      onKeyDown={e => e.code === 'Enter' && linkRef.current.click()}
      tabIndex="0"
    >
      <img
        src={flag}
        alt=""
        className="w-full h-40 rounded-t-md shadow dark:shadow-glow-light object-cover"
      />
      <div className="pt-6 pb-12 pl-6 pr-6">
        <h2 className="text-[1.125rem] leading-[1.625rem] font-extrabold mb-4">
          {name}
        </h2>
        <p className="mb-2">
          <span className="font-semibold">Population: </span>
          {population}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {capital}
        </p>
        <Link
          to={`/country/${code}`}
          ref={linkRef}
          tabIndex="-1"
          aria-hidden
        />
      </div>
    </li>
  );
};

export default CountryCard;
