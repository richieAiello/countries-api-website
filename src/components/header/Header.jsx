const Header = props => {
  return (
    // box-shadow: 0px 2px 4px 0px #0000000E
    <header
      className="bg-white text-[#111517] dark:bg-[#2B3844]  dark:text-white h-20 flex items-center 
      shadow relative z-10"
    >
      <div className="container flex justify-between">
        <h1 className="text-[0.875rem] leading-5 font-extrabold">
          Where in the world?
        </h1>
        <p className="">toggle</p>
        {/* Also displayed light/dark mode toggle button */}
      </div>
    </header>
  );
};

export default Header;
