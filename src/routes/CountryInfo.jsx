import { Link, useLocation } from 'react-router-dom';
import useCountryCode from '../hooks/useCountryCode';
import { ReactComponent as LeftArrow } from '../assets/back.svg';

const CountryInfo = props => {
  const location = useLocation();
  const countryCode = location.pathname.slice(9);

  const { country, isLoading, isError } = useCountryCode(countryCode);

  // console.log(country);

  // Break this down into smaller components
  return (
    <div className="container pt-10">
      {isError && <div>Request Failed. Please try again.</div>}
      {isLoading && <div>Loading...</div>}
      <Link
        to="/"
        className="mb-16 inline-flex items-center justify-center h-10 w-36 bg-white text-[1rem] 
        leading-5 rounded-md duration-300  shadow-md fill-black-light 
        dark:fill-white dark:bg-blue-grey-light dark:shadow-glow-light 
        hover:text-white hover:bg-blue-grey-light hover:fill-white
        hover:dark:bg-white hover:dark:text-black-light hover:dark:fill-black-light
        focus:text-white focus:bg-blue-grey-light focus:fill-white
        focus:dark:bg-white focus:dark:text-black-light focus:dark:fill-black-light"
      >
        <LeftArrow className="w-4 mr-[0.625rem]" />
        Home
      </Link>
      <div className="grid lg:grid-cols-2 lg:gap-x-[7.5rem]">
        <img
          src={country.flags?.svg}
          alt=""
          className="w-[min(100%,320px)] object-cover rounded-md mb-11 shadow-md
          md:w-[480px] lg:w-[560px] bg-white"
        />
        <div className="grid text-[1rem] h-max leading-8 md:grid-cols-2 md:gap-x-6">
          <h2 className="font-extrabold text-2xl mb-4">
            {country.name?.official ?? 'Unknown'}
          </h2>
          <div className="mb-8 md:col-start-1">
            <p className="">
              <span className="font-semibold">Native Name: </span>
              {Object.values(country.name?.nativeName ?? {})[0]
                ?.official ?? 'Unknown'}
            </p>
            <p className="">
              <span className="font-semibold">Population: </span>
              {country.population?.toLocaleString() ?? 'Unknown'}
            </p>
            <p className="">
              <span className="font-semibold">Region: </span>
              {country.region ?? 'Unknown'}
            </p>
            <p className="">
              <span className="font-semibold">Sub Region: </span>
              {country.subregion ?? 'Unknown'}
            </p>
            <p className="">
              <span className="font-semibold">Capital: </span>
              {country.capital?.[0] ?? 'Unknown'}
            </p>
          </div>
          <div className="mb-8">
            <p className="">
              <span className="font-semibold">
                Top Level Domain:{' '}
              </span>
              {country.tld?.[0] ?? 'Unknown'}
            </p>
            <p className="">
              <span className="font-semibold">Currencies: </span>
              {Object.values(country.currencies ?? {})[0]?.name ??
                'Unknown'}
            </p>
            <p className="">
              <span className="font-semibold">Languages: </span>
              {Object.values(country.languages ?? {}).join(', ') ??
                'Unknown'}
            </p>
            <a
              href={country.maps?.googleMaps}
              target="_blank"
              className="font-semibold hover:underline focus:underline decoration-2"
            >
              Google Maps
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:col-span-2">
            <h3 className="text-base font-bold mb-4 w-[20ch] md:mr-4">
              Border Countries:
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-4">
              {country.borders?.map(border => {
                return (
                  <Link
                    to={`/country/${border}`}
                    key={border}
                    className="h-7 w-24 inline-flex items-center justify-center bg-white text-center text-[12px]
                    rounded-sm shadow-[0_0_4px_1px_rgba(0,0,0,0.1049)] font-bold duration-300 
                    dark:bg-blue-grey-light dark:shadow-white dark:hover:shadow-[rgba(0,0,0,0.1049)]
                    hover:bg-blue-grey-light hover:text-white dark:hover:text-black-light dark:hover:bg-white
                    focus:bg-blue-grey-light focus:text-white dark:focus:text-black-light dark:focus:bg-white"
                  >
                    {border}
                  </Link>
                );
              }) ?? <p>None</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
