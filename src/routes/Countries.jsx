import useSWR from 'swr';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import useObserver from '../hooks/useObserver';
import CountryRegion from '../components/countries/CountryRegion';
import CountrySearch from '../components/countries/CountrySearch';
import CountryList from '../components/countries/CountryList';

const Countries = props => {
  const [endpoint, setEndpoint] = useState(
    'https://restcountries.com/v3.1/all'
  );
  const [searchValue, setSearchValue] = useState('');
  const [searchStyles, setSearchStyles] = useState(true);
  const [regionValue, setRegionValue] = useState('');

  const stickyRef = useRef(null);

  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(endpoint, fetcher);

  // Can cause an infinite loop if error persists. Seek other solution.
  // error && setEndpoint('https://restcountries.com/v3.1/all');

  // Accepts a ref and accesses ref.current after mount with useEffect
  useObserver(stickyRef, setSearchStyles, searchStyles);

  useEffect(() => {
    // const root = document.getElementById('html');
    // console.log(root);
    // document.documentElement.classList.remove('dark');
    // console.log(document.documentElement);
  }, []);

  // console.log(data);

  return (
    <>
      <div
        ref={stickyRef}
        className="sticky top-[-1px] pt-12 duration-300"
      >
        <div className="container">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <CountrySearch
              setEndpoint={setEndpoint}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              setRegionValue={setRegionValue}
              searchStyles={searchStyles}
            />
            <CountryRegion
              setEndpoint={setEndpoint}
              setRegionValue={setRegionValue}
              regionValue={regionValue}
              searchStyles={searchStyles}
            />
          </div>
          {data && !error && (
            <h2 className="pt-3 pb-3 text-lg font-semibold text-center md:text-left">
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
