import useSWR from 'swr';
import axios from 'axios';
import { useState, useRef } from 'react';
import useObserver from '../hooks/useObserver';
import clsx from 'clsx';
import CountryRegion from '../components/countries/CountryRegion';
import CountrySearch from '../components/countries/CountrySearch';
import CountryList from '../components/countries/CountryList';

const Countries = props => {
  const [endpoint, setEndpoint] = useState(
    'https://restcountries.com/v3.1/all'
  );
  const [searchValue, setSearchValue] = useState('');
  const [regionValue, setRegionValue] = useState('');
  const [stickyStyles, setStickyStyles] = useState(false);
  const [searchResults, setSearchResults] = useState(
    ' countries in the world!'
  );

  const stickyRef = useRef(null);

  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(endpoint, fetcher);

  // Accepts a ref and accesses ref.current after mount with useEffect
  useObserver(stickyRef, setStickyStyles, stickyStyles);

  return (
    <>
      <div
        ref={stickyRef}
        className={`sticky top-[-1px] pt-12 duration-300 dark:shadow-glow-light z-10
          ${clsx({
            'pt-12': !stickyStyles,
            'pt-8': stickyStyles,
            shadow: stickyStyles,
            'bg-transparent': !stickyStyles,
            'bg-white': stickyStyles,
            'dark:bg-blue-grey-light': stickyStyles,
          })}
        `}
      >
        <div className="container">
          <div className="pb-3 flex flex-col items-center md:flex-row md:justify-between">
            <CountrySearch
              setEndpoint={setEndpoint}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              setRegionValue={setRegionValue}
              stickyStyles={stickyStyles}
              setSearchResults={setSearchResults}
            />
            <div className="flex gap-x-4">
              <button
                type="button"
                aria-label="Search all countries."
                onClick={() => {
                  setEndpoint('https://restcountries.com/v3.1/all');
                  setSearchResults(' countries in the world!');
                  setRegionValue('');
                  setSearchValue('');
                }}
                className={`px-6 rounded-md shadow-md dark:shadow-glow-light
                outline-black-light dark:outline-white outline-2 hover:outline focus:outline
                ${clsx({
                  'bg-white': !stickyStyles,
                  'dark:bg-blue-grey-light': !stickyStyles,
                  'bg-grey': stickyStyles,
                  'dark:bg-blue-grey-dark': stickyStyles,
                })}`}
              >
                All
              </button>
              <CountryRegion
                setEndpoint={setEndpoint}
                setRegionValue={setRegionValue}
                regionValue={regionValue}
                stickyStyles={stickyStyles}
                setSearchResults={setSearchResults}
              />
            </div>
          </div>
          {data && !error && (
            <h2 className="pb-3 text-lg font-semibold text-center md:text-left">
              Search Results: {data.length.toLocaleString()}
              {searchResults}
              {/* {regionValue
                ? regionValue[0].toUpperCase() +
                  regionValue.substring(1) +
                  '!'
                : 'the world!'} */}
            </h2>
          )}
        </div>
      </div>
      <CountryList data={data} error={error} />
    </>
  );
};

export default Countries;
