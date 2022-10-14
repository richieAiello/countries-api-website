import { Link, useLocation } from 'react-router-dom';
import useCountryCode from '../hooks/useCountryCode';

// Retrieve data for selected Country
// Display selected Country info
// Pass data through props?
// Or fetch data for selected Country on this page...
// Using either swr or the fetcher provided by reacter router.
// Country prop is hopefully an object received from Countries

// swr with full-name provided by link
// endpoint: https://restcountries.com/v3.1/name/{name}?fullText=true

// useState to toggle whether or not to seach by country code?
const CountryInfo = props => {
  const location = useLocation();
  const countryCode = location.pathname.slice(9);

  const { country, isLoading, isError } = useCountryCode(countryCode);

  console.log(country);

  return (
    <div className="container pt-10">
      {isError && <div>Request Failed. Please try again.</div>}
      {isLoading && <div>Loading...</div>}
      <Link to="/" className="block mb-16">
        Back
      </Link>
      <div className="">
        <img
          src={country.flags?.png}
          alt=""
          className="w-[min(100%,320px)] h-[min(auto,229px)] rounded-md mb-11 shadow-md"
        />
        <div className="">
          <h2 className="">{country.name?.common ?? 'Unknown'}</h2>
          <p className="">
            <span className="">Native Name: </span>
            {Object.values(country.name?.nativeName ?? {})[0]
              ?.official ?? 'Unknown'}
          </p>
          <p className="">
            <span className="">Population: </span>
            {country.population?.toLocaleString() ?? 'Unknown'}
          </p>
          <p className="">
            <span className="">Region: </span>
            {country.region ?? 'Unknown'}
          </p>
          <p className="">
            <span className="">Sub Region: </span>
            {country.subregion ?? 'Unknown'}
          </p>
          <p className="">
            <span className="">Capital: </span>
            {country.capital?.[0] ?? 'Unknown'}
          </p>
          <p className="">
            <span className="">Top Level Domain: </span>
            {country.tld?.[0] ?? 'Unknown'}
          </p>
          <p className="">
            <span className="">Currencies: </span>
            {Object.values(country.currencies ?? {})[0]?.name ??
              'Unknown'}
          </p>
          <p className="">
            <span className="">Languages: </span>
            {Object.values(country.languages ?? {}).join(', ') ??
              'Unknown'}
          </p>
          <h3 className="">Border Countries:</h3>
          {/* container for Border Country Links. */}
          {/* map through border countries array and spawn Links */}
          <div>
            {country.borders?.map(border => {
              return (
                <Link
                  to={`/country/${border}`}
                  key={border}
                  className="pr-2 pt-4"
                >
                  {border}
                </Link>
              );
            }) ?? 'None'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
