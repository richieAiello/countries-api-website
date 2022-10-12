import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

// Each country on home page must be a clickable link that leads to a nested route
// Nested Route contains more information about country as well as borderd countries
// Border Coutries also lead to there own nested routes.
const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default App;
