import { Link, useLocation } from 'react-router-dom';
import useCountry from '../hooks/useCountry';

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

  const { country, isLoading, isError } = useCountry(countryCode);

  console.log(country);

  return (
    <>
      {isError && <div>Request Failed. Please try again.</div>}
      {isLoading && <div>Loading...</div>}
      <Link to="/" className="block">
        Back
      </Link>
      <div className="">
        <img src={country.flags?.png} alt="" className="" />
        <div className="">
          <h2 className=""></h2>
          <p className="">
            <span className=""></span>
          </p>
          <p className="">
            <span className=""></span>
          </p>
          <p className="">
            <span className=""></span>
          </p>
          <p className="">
            <span className=""></span>
          </p>
          <p className="">
            <span className=""></span>
          </p>
          <p className="">
            <span className=""></span>
          </p>
          <p className="">
            <span className=""></span>
          </p>
          <p className="">
            <span className=""></span>
          </p>
          <h3 className=""></h3>
          {/* container for Border Country Links. */}
          {/* map through border countries array and spawn Links */}
          <div>
            {country &&
              country.borders?.map(item => {
                return (
                  <Link
                    to={`/country/${item}`}
                    key={item}
                    className="pr-2 pt-4"
                  >
                    {item}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
