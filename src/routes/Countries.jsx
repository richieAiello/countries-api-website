import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';
import CountryRegion from '../components/countries/CountryRegion';
import CountrySearch from '../components/countries/CountrySearch';
import CountryList from '../components/countries/CountryList';

// Store endpoint state for Search Bar and Region DropDown Here
const Countries = props => {
  const [endpoint, setEndpoint] = useState(
    'https://restcountries.com/v3.1/all'
  );

  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(endpoint, fetcher);

  // error && setEndpoint('https://restcountries.com/v3.1/all');

  // data ? console.log(data) : console.log('No Data');
  console.log(data);

  return (
    <div className="container">
      {/* <button
        type="button"
        onClick={e =>
          setEndpoint('https://restcountries.com/v3.1/name/peru')
        }
      >
        Click
      </button> */}
      <CountrySearch setState={setEndpoint} />
      <CountryRegion setState={setEndpoint} />
      {data && <h2>Results: {data.length} countries</h2>}
      <CountryList data={data} error={error} />
    </div>
  );
};

export default Countries;
