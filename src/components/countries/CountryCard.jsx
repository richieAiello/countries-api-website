import { Link } from 'react-router-dom';
// import { useRef } from 'react';

// Turn each card into a cliackable link leading towards that countries info page.
const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
  code,
}) => {
  return (
    <li
      className="shadow-lg rounded-md bg-white text-black-light dark:bg-blue-grey-light dark:text-white 
      w-[min(100%,264px)] h-[336px]"
    >
      <img
        src={flag}
        alt=""
        className="w-full h-40 rounded-t-md shadow object-cover"
      />
      <div className="pt-6 pb-12 pl-6 pr-6">
        <h2 className="">{name}</h2>
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
        <Link to={`/country/${code}`}>link</Link>
      </div>
    </li>
  );
};

export default CountryCard;
