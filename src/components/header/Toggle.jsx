import { useState, useEffect } from 'react';
import { ReactComponent as Light } from '../../assets/light.svg';
import { ReactComponent as Dark } from '../../assets/dark.svg';

const Toggle = props => {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <button
      type="button"
      className="flex items-center"
      onClick={() => setDarkMode(!darkMode)}
    >
      {!darkMode ? (
        <>
          <Dark className="fill-black-light w-5 mr-3" />
          <span className="text-base">Dark Mode</span>
        </>
      ) : (
        <>
          <Light className="fill-white w-6 mr-3" />
          <span className="text-base">Light Mode</span>
        </>
      )}
    </button>
  );
};

export default Toggle;
