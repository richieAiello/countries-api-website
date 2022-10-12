import useSWR from 'swr';
import axios from 'axios';
import CountryList from '../components/countries/CountryList';

const Countries = props => {
  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(
    'https://restcountries.com/v3.1/all',
    fetcher
  );

  // data ? console.log(data) : console.log('No Data');
  console.log(data);

  return <CountryList data={data} error={error} />;
};

export default Countries;
