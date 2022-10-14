import useSWR from 'swr';
import axios from 'axios';
import { useState, useRef } from 'react';
import useObserver from '../hooks/useObserver';
import CountryRegion from '../components/countries/CountryRegion';
import CountrySearch from '../components/countries/CountrySearch';
import CountryList from '../components/countries/CountryList';

const Countries = props => {
  const [endpoint, setEndpoint] = useState(
    'https://restcountries.com/v3.1/all'
  );
  const [searchValue, setSearchValue] = useState('');
  const [regionValue, setRegionValue] = useState('');

  const stickyRef = useRef(null);

  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(endpoint, fetcher);

  // Can cause an infinite loop if error persists. Seek other solution.
  // error && setEndpoint('https://restcountries.com/v3.1/all');

  useObserver(stickyRef);

  // console.log(data);

  return (
    <>
      <div
        ref={stickyRef}
        className="sticky -top-[1px] bg-grey pt-8 duration-300"
      >
        <div className="container">
          <div className="flex justify-between">
            <CountrySearch
              setEndpoint={setEndpoint}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              setRegionValue={setRegionValue}
            />
            <CountryRegion
              setEndpoint={setEndpoint}
              setRegionValue={setRegionValue}
              regionValue={regionValue}
            />
          </div>
          {data && !error && (
            <h2 className="pt-2 pb-4 text-lg font-semibold text-center">
              Results: {data.length} countries
            </h2>
          )}
        </div>
      </div>
      <CountryList data={data} error={error} />
    </>
  );
};

export default Countries;
