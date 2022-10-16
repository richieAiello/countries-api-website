import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className="pb-12">
        <Outlet />
      </main>
    </>
  );
};

export default App;
