import CountryCard from './CountryCard';

const CountryList = ({ data, error }) => {
  return (
    <>
      {error && <div>Request Failed.</div>}
      {!data && !error && <div>Loading...</div>}
      {data?.length && (
        <ul className="grid justify-items-center gap-y-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 lg:gap-[4.6875rem]">
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
