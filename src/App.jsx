import { Routes, Route } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
import Header from './components/header/Header';
import CountryCard from './components/home/CountryCard';

// Fetch all country data for home page
// Map through data and display country flags and information with a country components
// Each country on home page must be a clickable link that leads to a nested route
// Nested Route contains more information about country as well as borderd countries
// Border Coutries also lead to there own nested routes.
const App = () => {
  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(
    'https://restcountries.com/v3.1/all',
    fetcher
  );

  data ? console.log(data) : console.log('No Data');

  // displays a grid of CountryCards 1 col mobile, 2 col tablet, 4 col desktop?
  return (
    <>
      <Header />

      <main className="container">
        {error && <div>Request Failed. Please try again.</div>}
        {!data && <div>Loading...</div>}
        {data && (
          <div className="grid gap-y-10">
            {data.map(item => {
              return (
                <CountryCard
                  key={item.name.official}
                  flag={item.flags.png}
                  name={item.name.official}
                  population={item.population.toLocaleString()}
                  region={item.region}
                  capital={item.capital ? item.capital[0] : 'None'}
                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default App;
