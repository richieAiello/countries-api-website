import useSWR from 'swr';
import axios from 'axios';

const App = () => {
  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(
    'https://restcountries.com/v3.1/all',
    fetcher
  );

  if (error) return <div>Request Failed</div>;
  if (!data) return <div>Loading...</div>;

  data ? console.log(data) : console.log('No Data');

  return (
    <div>
      <h1>Country Data:</h1>
    </div>
  );
};

export default App;
