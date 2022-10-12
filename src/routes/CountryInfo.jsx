import { Link, useLocation } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';

// Retrieve data for selected Country
// Display selected Country info
// Pass data through props?
// Or fetch data for selected Country on this page...
// Using either swr or the fetcher provided by reacter router.
// Country prop is hopefully an object received from Countries

// swr with full-name provided by link
// endpoint: https://restcountries.com/v3.1/name/{name}?fullText=true
const CountryInfo = props => {
  const location = useLocation();
  const country = location.pathname.slice(9);

  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`,
    fetcher
  );

  // console.log(data);
  // console.log(endpoint);

  return (
    <>
      {error && <div>Request Failed. Please try again.</div>}
      {!data && <div>Loading...</div>}
      <Link to="/" className="block">
        Back
      </Link>
      <div className="">
        <img src={data?.[0]?.flags.png} alt="" className="" />
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
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
