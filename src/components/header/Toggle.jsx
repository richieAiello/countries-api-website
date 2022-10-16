import { useState, useEffect } from 'react';

// Work with local storage to toggle light and dark mode
// If HTML element in index.html has a class="dark" tailwind will use dark styles
// Create state for darkMode based on local storage (refer to audiophile AppContext)
// Use lazy initial state to determine the initial boolean of darkMode state
// If local storage theme doesn't exist setDarkMode(false)
// If dark HTMl element should receive class="dark"
// If light remove class from HTML
const Toggle = props => {
  // lift darKMode state up so sticky-search can change based on dark mode when scrolling down
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    // Conditionally render icons based on darkMode state
    <button type="button" onClick={() => setDarkMode(!darkMode)}>
      Click to toggle
    </button>
  );
};

export default Toggle;
