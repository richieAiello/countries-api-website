import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

// Each country on home page must be a clickable link that leads to a nested route
// Nested Route contains more information about country as well as borderd countries
// Border Coutries also lead to there own nested routes.
const App = () => {
  return (
    <>
      <Header />
      <main className="bg-grey dark:bg-blue-grey-dark min-h-[calc(100vh-5rem)]">
        <Outlet />
      </main>
    </>
  );
};

export default App;
