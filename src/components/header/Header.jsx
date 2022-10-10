const Header = props => {
  return (
    <header className="bg-white text-[#111517] dark:bg-[#2B3844]  dark:text-white py-6">
      <div className="container flex justify-between items-center">
        <h1 className="text-[0.875rem] leading-5 font-extrabold">
          Where in the world?
        </h1>
        <p>toggle</p>
        {/* Also displayed light/dark mode toggle button */}
      </div>
    </header>
  );
};

export default Header;
