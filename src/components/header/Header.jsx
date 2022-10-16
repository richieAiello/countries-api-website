import Toggle from './Toggle';

const Header = props => {
  return (
    <header
      className="bg-white dark:bg-[#2B3844] h-20 flex items-center 
      shadow relative z-10 dark:shadow-glow-light"
    >
      <div className="container flex justify-between">
        <h1 className="text-[1.125rem] leading-5 font-extrabold">
          Where in the world?
        </h1>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
