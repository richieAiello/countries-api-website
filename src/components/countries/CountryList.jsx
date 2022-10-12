import CountryCard from './CountryCard';

const CountryList = ({ data, error }) => {
  return (
    <>
      {error && <div>Request Failed. Please try again.</div>}
      {!data && <div>Loading...</div>}
      {data?.length && (
        <ul className="grid gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {data.map(item => {
            return (
              <CountryCard
                key={item.name.official}
                flag={item.flags.png}
                name={item.name.official}
                population={item.population.toLocaleString()}
                region={item.region}
                capital={item.capital ? item.capital[0] : 'None'}
                code={item.cca3}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CountryList;
