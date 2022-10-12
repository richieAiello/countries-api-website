import useSWR from 'swr';
import axios from 'axios';

const useCountry = countryCode => {
  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
    fetcher
  );

  return {
    country: data ? data[0] : {},
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCountry;
