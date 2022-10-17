import CountryCard from './CountryCard';

const CountryList = ({ data, error }) => {
  return (
    <div className="container">
      {!data && error && (
        <p className="text-3xl text-center mt-20">
          Request failed! Please search again.
        </p>
      )}
      {!data && !error && (
        <p className="text-3xl text-center mt-20">
          Loading Countries...
        </p>
      )}
      {data?.length && (
        <ul className="grid justify-items-center gap-y-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 lg:gap-[4.6875rem]">
          {data.map(item => {
            return (
              <CountryCard
                key={item.name.official}
                flag={item.flags.png}
                name={item.name.common}
                population={item.population.toLocaleString()}
                region={item.region}
                capital={item.capital ? item.capital[0] : 'None'}
                code={item.cca3}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CountryList;
