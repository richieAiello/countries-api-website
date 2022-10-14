import useSWR from 'swr';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import CountryRegion from '../components/countries/CountryRegion';
import CountrySearch from '../components/countries/CountrySearch';
import CountryList from '../components/countries/CountryList';

// Store endpoint state for Search Bar and Region DropDown Here
// Set conditions to reset value or region when search bar is used.
// Maybe lift up handle change fucntions for this as well
const Countries = props => {
  const [endpoint, setEndpoint] = useState(
    'https://restcountries.com/v3.1/all'
  );
  const [searchValue, setSearchValue] = useState('');
  const [regionValue, setRegionValue] = useState('');

  const stickyRef = useRef(null);

  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(endpoint, fetcher);

  error && setEndpoint('https://restcountries.com/v3.1/all');

  // https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/
  // https://davidwalsh.name/detect-sticky
  useEffect(() => {
    const observerCallback = entriesList => {
      const entry = entriesList[0];
      entry.target.classList.toggle(
        'sticky-search',
        !entry.isIntersecting
      );
      console.log(entry.isIntersecting);
    };

    const oberverOptions = {
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      oberverOptions
    );

    observer.observe(stickyRef.current);

    return () => observer.disconnect();
  }, []);

  // data ? console.log(data) : console.log('No Data');
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
