const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div
      className="shadow-md rounded-md bg-[#f5f5f5] text-black-light dark:bg-blue-grey-light dark:text-white 
      w-[min(100%,264px)] justify-self-center"
    >
      <img src={flag} alt="" className="w-full h-40 rounded-t-md" />
      <div className="pt-6 pb-12 pl-6 pr-6">
        <h2 className="">{name}</h2>
        <p className="mb-2">
          <span className="font-semibold">Population: </span>
          {population}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
